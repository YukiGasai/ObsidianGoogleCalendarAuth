import Link from 'next/link'

export default function Home() {
  return (
    <div className="main">
      <Link href="https://github.com/YukiGasai/obsidian-google-calendar">
        <h1>Obsidian Google Calendar</h1>
      </Link>

      <p className="ShortDescription">View, Create, Update and Delete your google events from inside Obsidian</p>

      <h2>Features</h2>
      <ul>
        <li>View your google events</li>
        <li>Create new events</li>
        <li>Update existing events</li>
        <li>Delete events</li>
      </ul>

      <p>If you want to use the plugin download <b><Link href="https://obsidian.md/">obsidian</Link></b> and install it from the <b><Link href="obsidian://show-plugin?id=google-calendar">cominity plugin store </Link></b></p>
    
    <Link href={'./imprint'}><span>Imprint</span></Link>
    <Link href={'./privacy'}><span>Privacy</span></Link>

    </div>
  )
}
