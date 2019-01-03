import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { withApolloClient } from '@api';
class Adoption extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Container>
          <Head>
            <title>AC Pet Adoption</title>
          </Head>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(Adoption);
