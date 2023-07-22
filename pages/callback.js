import { useEffect } from "react"
import { scopeTest } from "@/helper/scopeTest";
import style from '../styles/Callback.module.css';

/*
    This file creates the /callback page. It is used to redirect the token to the obsidian app.
*/
export default function Callback() {
  // use the useEffect hook to run code on page load
  useEffect(() => {
    // Get the query parameters from the url
    const currentUrl = window.location.href;
    const params = currentUrl.split("?")[1];
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');
    const scope = urlParams.get('scope');
    const token = urlParams.get('token');

    // Check if the url contains the required parameters for the code server flow
    if (token && scope) {
      // Add a delay to make sure the browser has time to redirect to the obsidian app
      setTimeout(() => {
        // Remove the query params from the url
        window.history.replaceState({}, document.title, "/" + "callback");

        // Only allow calendar scope to minimize security risk of a stolen client.
        if (scopeTest(scope)) {
          window.location = `obsidian://googleLogin?token=${token}&scope=${scope}`;
        }
      }, 200)
      return;
    }


    // Callback is used for the pkce local flow
    setTimeout(() => {
      // Remove the query params from the url
      window.history.replaceState({}, document.title, "/" + "callback");
      if (!state || !scope) return;

      // Only allow calendar scope to minimize security risk of a stolen client.
      if (scopeTest(scope)) {
        // Redirect to the obsidian app with all parameters
        window.location = `obsidian://googleLogin?${params}`;
      }
    }, 200)

  }, [])

  return (
    <main className={style.main}>
      <h1 className={style.h1}>Allow this page to redirect you to Obsidian</h1>

      <h2 className={style.h2}>FAQ</h2>
      <span className={style.subText}>Answers to some problems that may occur</span>

      <section className={style.cards}>
        <article className={style.card}>
          <h3 className={style.question}>What do I have to allow, there is no popup?</h3>
          <p className={style.answer}>Check the <a className="fancyLink" href="https://android.stackexchange.com/questions/194218/open-links-in-corresponding-app-instead-of-browser">settings</a> of you browser if you have disabled <i>Open links in apps</i> in general.</p>
        </article>

        <article className={style.card}>
          <h3 className={style.question}>I accidentally closed the popup!</h3>
          <p className={style.answer}>If you have closed the popup, close this tab and restart the login from Obsidian.</p>
        </article>

        <article className={style.card}>
          <h3 className={style.question}>Obsidian doesn't show up</h3>
          <p className={style.answer}>Depending on you browser, you can try select the Obsidian application <a className="fancyLink" href="https://i.imgur.com/5Og6RGA.png">directly</a>.</p>
        </article>

        <article className={style.card}>
          <h3 className={style.question}>Where am I?</h3>
          <p className={style.answer}>This page is a redirect Website to transfer the access keys into the obsidian application. The code of this page can be found on <a className="fancyLink" href="https://github.com/YukiGasai/ObsidianGoogleCalendarAuth">Github</a></p>
        </article>

        <article className={style.card}>
          <h3 className={style.question}>How can I select the vault I want to use?</h3>
          <p className={style.answer}>The vault can't be selected from outside of Obsidian. To make sure the write vault is being used. Close all open obsidian windows except the vault use want to use.</p>
        </article>

        <article className={style.card}>
          <h3 className={style.question}>Just to make sure</h3>
          <p className={style.answer}>This process will not work, if Obsidian is not installed on the system you use to view this page <a className="fancyLink" href="https://github.com/YukiGasai/ObsidianGoogleCalendarAuth">Github</a>.</p>
        </article>

        <article className={style.card}>
          <h3 className={style.question}>This doesn't work?</h3>
          <p className={style.answer}>If you have tested all the previous steps you can ask for help on <a className="fancyLink" href="https://github.com/YukiGasai/obsidian-google-calendar/discussions">Github</a>.</p>
        </article>

        <article className={style.card}>
          <h3 className={style.question}>I have feedback</h3>
          <p className={style.answer}>For send feedback you can create a <a className="fancyLink" href="https://github.com/YukiGasai/obsidian-google-calendar/issues">GitHub Issue</a> or contact me directly.</p>
        </article>
    </section>
    </main>
  )
}
