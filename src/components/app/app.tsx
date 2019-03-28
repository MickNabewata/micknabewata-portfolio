import React from 'react';
import styles from './appStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AccountBox from '@material-ui/icons/AccountBox';
import Stars from '@material-ui/icons/Stars';
import Work from '@material-ui/icons/Work';
import Wallpaper from '@material-ui/icons/Wallpaper';
import withRoot from '../../withRoot';
import DrawerLayout, { Links } from '../drawerLayout/drawerLayout';
import Hello from '../hello/hello';
import Skills from '../skills/skills';
import Works from '../works/works';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
  contents : JSX.Element,
  links : Links[]
};

/** コンポーネント定義 */
class App extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      contents : <Hello />,
      links : this.staticLinks
    };
  }

  /** 固定のナビゲーション */
  staticLinks : Links[] = [
    [
      {
        text : '自己紹介2',
        icon : <AccountBox />,
        click : (event) => {
          this.setState({ contents : <Hello /> });
        },
        closeMenuAfterClick : true
      },
      {
        text : '技術',
        icon : <Stars />,
        click : (event) => {
          this.setState({ contents : <Skills /> });
        },
        closeMenuAfterClick : true
      },
      {
        text : '開発実績',
        icon : <Work />,
        click : (event) => {
          this.setState({ contents : <Works /> });
        },
        closeMenuAfterClick : true
      },
      {
        text : 'ブログ',
        icon : <Wallpaper />,
        click : (event) => {
          window.open('https://www.micknabewata.com/');
          this.setState({ contents : <Works /> });
        },
        closeMenuAfterClick : true
      }
    ]
  ];

  /** レンダリング */
  render() {
    return (
      <DrawerLayout links={ this.state.links } contents={ this.state.contents } />
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withRoot(withStyles(styles, { withTheme : true })(App));