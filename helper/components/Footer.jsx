import Link from "next/link"
export default function Footer () {
    return (
        <footer className="footerContainer">
            <ul className="footerList">
                <li className="footerItemText"><Link href={'/'} >Home</Link></li>
                <li className="footerItemText"><Link href={'about'}>About</Link></li>
                <li className="footerItemText"><Link href={'imprint'}>Imprint</Link></li>
                <li className="footerItemText"><Link href={'privacy'}>Privacy</Link></li>
                <li className="footerItemText"><Link href={'https://github.com/YukiGasai/ObsidianGoogleCalendarAuth'}  rel="noopener noreferrer" target="_blank">Source</Link></li>
                <li className="footerItemText"><Link href={'https://ko-fi.com/yukigasai'}  rel="noopener noreferrer" target="_blank">Support</Link></li>
            </ul>
            
            <span>Powered by 
                <Link className="fancyLink" href={'https://vercel.com/'}  rel="noopener noreferrer" target="_blank"> Vercel</Link>,
                <Link className="fancyLink" href={'https://nextjs.org/'}  rel="noopener noreferrer" target="_blank"> Next.js </Link>&
                <Link className="fancyLink" href={'https://github.com/'}  rel="noopener noreferrer" target="_blank"> GitHub</Link>
            </span>
        </footer>
    )
}