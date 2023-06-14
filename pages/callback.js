import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const currentUrl = window.location.href;
    const params = currentUrl.split("?")[1];
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');
    const scope = urlParams.get('scope');
    const token = urlParams.get('token');

    if (token && scope) {
      setTimeout(() => {
        // Remove the query params from the url
        window.history.replaceState({}, document.title, "/" + "callback");

        // Only allow calendar scope to minimize security risk of a stolen client.
        if (scope !== "https://www.googleapis.com/auth/calendar") return;
        window.location = `obsidian://googleLogin?token=${token}`;
      }, 200)
      return;
    }



    setTimeout(() => {
      // Remove the query params from the url
      window.history.replaceState({}, document.title, "/" + "callback");
      if (!state || !scope) return;

      // Only allow calendar scope to minimize security risk of a stolen client.
      if (scope !== "https://www.googleapis.com/auth/calendar") return;
      window.location = `obsidian://googleLogin?${params}`;
    }, 200)

  }, [])

  return (
    <div>

      Allow the app to open in Obsidian.
      The source code for this page is in visible on <a href="https://github.com/YukiGasai/ObsidianGoogleCalendarAuth">Github</a>
    </div>
  )
}
