import '@/styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
