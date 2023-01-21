import Head from 'next/head';
import Script from 'next/script';
import { Poppins } from '@next/font/google';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { Toaster } from 'react-hot-toast';
import { theme } from '../styles/theme';

const isProduction = process.env.NODE_ENV === 'production';

const poppins = Poppins({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  variable: '--np-font'
});

// This is to force theme-ui types to match Toast component types.
const colors = {
  success: theme.colors?.green,
  error: theme.colors?.red,
  background: theme.colors?.white
} as Record<string, string>;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {isProduction && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=UA-52783256-2"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-52783256-2');
      `}
          </Script>
        </>
      )}
      <Head>
        <title>Not Paramount | Drum Recording & Music Production Studio</title>
        <meta
          name="description"
          content="Not Paramount is a professional drum studio offering a variety of drum and audio production services managed by session drummer Chris Boot. Find out more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <div className={poppins.variable}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 4000,
          success: {
            iconTheme: {
              primary: colors.success,
              secondary: colors.background
            }
          },
          error: {
            iconTheme: { primary: colors.error, secondary: colors.background },
            style: {
              color: colors.error
            }
          },
          style: {
            padding: '1rem',
            borderRadius: '5px',
            backgroundColor: colors.background
          }
        }}
      />
    </>
  );
}
