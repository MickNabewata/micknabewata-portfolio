import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import primaryColor from '@material-ui/core/colors/indigo';
import CssBaseline from '@material-ui/core/CssBaseline';

/** アプリケーション全体に適用するテーマ */
const theme = createMuiTheme({
  palette: {
    primary: primaryColor,
    text: {
      primary: '#2c2c2c'
    },
    background:{
      default : 'white',
      paper : 'white'
    }
  },
  typography: {
    useNextVariants: true,
  },
});

/** テーマとスタイルを適用したコンポーネントを返却 */
function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

/** テーマとスタイルを適用したコンポーネントを返却 */
export default withRoot;
