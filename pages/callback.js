import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
        const currentUrl = window.location.href;
        const params = currentUrl.split("?")[1];
        setTimeout(() => {   
            window.location = `obsidian://googleLogin?${params}`;
        }, 200)

    }, [])

    return (
      <div>

        Allow the app to open in Obsidian.

        The source code for this page is in visible on <a href="https://github.com/YukiGasai/GoogleAuthObsidianRedirect">Github</a>
      </div>
    )
  }
  