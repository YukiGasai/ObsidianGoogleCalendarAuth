import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1>Privacy Policy</h1>
            <p>The following text describes the privacy policy for the <Link href="./index">Google Calendar Plugin for Obsidian.</Link></p>
            <p>The following gives a simple overview of what happens to your personal information when you visit our website. Personal information is any data with which you could be personally identified. Detailed information on the subject of data protection can be found in our privacy policy found below.</p>
            <p>The obsidian google calendar plugin, as well as the obsidian google calendar doesn&#39;t store any personal user data.</p>
            <p>After authorizing the plugin to access the users google calendars, the plugin will read the contents of the calendars to display them inside the obsidian application.</p>
            <p>After direct user input the plugin can update and delete existing events inside the users calendars.</p>
            <p>After direct user input the plugin can create events inside the users calendars.</p>
            <p>To keep the user logged in between sessions the plugin will store a user token inside the obsidian application.</p>
        </div>
    )
}