import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from 'styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>List Users - randomuser.me</title>
        <link
          rel="shortcut icon"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/img/icon-512.png"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="A simple project for list users with API randomuser.me, using React, NextJS and Styles Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
