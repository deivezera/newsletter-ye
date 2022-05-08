import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell, Header, MantineProvider, Title } from '@mantine/core';
import { theme } from '../styles/theme';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={theme}
      >
        <AppShell
          padding="md"
          header={
            <Header sx={(theme) => ({backgroundColor: theme.colors.dark[9]})} height={60} p="xs">
              <Title sx={(theme) => ({color: theme.colors.gray[0]})} order={1}>Young English</Title>
            </Header>
          }
          styles={(theme) => ({
            main:{backgroundColor: theme.colors.brand[5]}
          })}
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}