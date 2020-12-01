import { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/globals.css';
import Layout from '../components/screen/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Boilerplate</title>
      </Head>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
