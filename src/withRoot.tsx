import * as React from 'react';
import { MuiThemeProvider, createMuiTheme, Theme } from '@material-ui/core/styles';
import primaryColor from '@material-ui/core/colors/indigo';
import CssBaseline from '@material-ui/core/CssBaseline';

/** アプリケーション全体に適用するテーマ */
function theme() : Theme {
  return createMuiTheme({
    palette: {
      primary: primaryColor,
      text: {
        primary : '#2c2c2c',
        secondary : 'white'
      },
      background:{
        default : 'white',
        paper : 'white'
      }
    },
    typography: {
      useNextVariants: true,
      fontFamily:[
        '"M PLUS Rounded 1c"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'
      ].join(','),
      fontSize : 17
    }
  });
}

/** テーマとスタイルを適用したコンポーネントを返却 */
function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    return (
      <MuiThemeProvider theme={theme()}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

/** テーマとスタイルを適用したコンポーネントを返却 */
export default withRoot;
