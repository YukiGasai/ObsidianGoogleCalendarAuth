import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../helper/components/Footer'

// This is the root document component for Next.js
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
