import * as React from 'react';
import { Provider } from 'urql';
import { AppProps } from 'next/app';
import client from '../graphql/client';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
