import { useEffect } from "react"
import { scopeTest } from "@/helper/scopeTest";

/*
    This file creates the /callback page. It is used to redirect the token to the obsidian app.
*/
export default function Home() {
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
    // Display help text
    // TODO: Improve help text
    <div>

      Allow the app to open in Obsidian.
      The source code for this page is in visible on <a href="https://github.com/YukiGasai/ObsidianGoogleCalendarAuth">Github</a>
    </div>
  )
}
