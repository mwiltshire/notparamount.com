import Head from 'next/head';
import { Poppins } from '@next/font/google';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { Toaster } from 'react-hot-toast';
import { theme } from '../styles/theme';

const poppins = Poppins({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--np-font'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Not Paramount | Drum Recording & Music Production Studio</title>
        <meta
          name="description"
          content="Not Paramount is a professional drum studio offering a variety of drum and audio production services managed by session drummer Chris Boot. Find out more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 4000,
          success: {
            iconTheme: {
              primary: 'var(--green)',
              secondary: 'var(--white)'
            }
          },
          error: {
            iconTheme: { primary: 'var(--red)', secondary: 'var(--white)' },
            style: {
              color: 'var(--red)'
            }
          },
          style: {
            padding: '1rem',
            borderRadius: '0px',
            backgroundColor: 'var(--white)'
          }
        }}
      />
    </>
  );
}
