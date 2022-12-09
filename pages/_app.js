import Head from 'next/head';
import { GlobalStyles } from '../src/styles/globalStyles';
import '../src/styles/reset.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Expenses Chart Component</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
