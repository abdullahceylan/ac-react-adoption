import React, { Component } from 'react';
import theme, { ThemeProvider } from '@theme';
import MainLayout from '../layouts';
import ShelterDetails from '@components/ShelterDetails';

class ShelterDetailsPage extends Component {
  static async getInitialProps({ query }) {
    return { pageParams: query };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <ShelterDetails pageParams={this.props.pageParams} />
        </MainLayout>
      </ThemeProvider>
    );
  }
}

export default ShelterDetailsPage;
