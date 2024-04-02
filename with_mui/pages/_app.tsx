import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { theme } from '../styles/theme';

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: AppProps) {
  const router = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} key={router.asPath} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
