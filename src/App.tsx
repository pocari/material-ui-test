import React from 'react';
import { Button, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { theme } from 'theme';
import Layout from 'containers/global/layout';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <div>hoge</div>
        <Button variant="contained" color="primary">hello, world! </Button>
        <div>moge</div>
      </Layout>
    </MuiThemeProvider>
  );
}

export default App;
