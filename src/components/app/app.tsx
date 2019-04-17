import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './appStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AccountBox from '@material-ui/icons/AccountBox';
import Stars from '@material-ui/icons/Stars';
import Work from '@material-ui/icons/Work';
import Wallpaper from '@material-ui/icons/Wallpaper';
import withRoot from '../../withRoot';
import DrawerLayout, { NavLinks } from '../drawerLayout/drawerLayout';
import Hello from '../hello/hello';
import Skills from '../skills/skills';
import Works from '../works/works';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
  /** ナビゲーション */
  links : NavLinks[]
};

/** コンポーネント定義 */
class App extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      links : this.staticLinks
    };
  }

  /** ナビゲーションの選択状態を切替 */
  changeNavigationSelection(url : string)
  {
    // 選択状態を切り替える
    this.state.links.forEach((links) => {
      links.forEach((l) => {
        if(l.url === url)
        {
          l.isSelected = true;
        }
        else
        {
          l.isSelected = false;
        }
      });
    });
  }

  /** ナビゲーション発生前のイベント */
  handleNavigate = (url : string) => () => {
    this.changeNavigationSelection(url);
  };

  /** 固定のナビゲーション */
  staticLinks : NavLinks[] = [
    [
      {
        text : '自己紹介',
        url : '/',
        icon : <AccountBox />,
        click : this.handleNavigate('/'),
        closeMenuAfterClick : true,
        isSelected : false
      },
      {
        text : '技術',
        url : '/skills',
        icon : <Stars />,
        click : this.handleNavigate('/skills'),
        closeMenuAfterClick : true
      },
      {
        text : '開発実績',
        url : '/works',
        icon : <Work />,
        click : this.handleNavigate('/works'),
        closeMenuAfterClick : true
      },
      {
        text : 'ブログ',
        url : 'https://www.micknabewata.com',
        icon : <Wallpaper />,
        closeMenuAfterClick : true
      }
    ]
  ];

  /** レンダリング */
  render() {

    // ナビゲーションの選択状態を切替
    this.changeNavigationSelection(location.pathname);

    return (
      <BrowserRouter>
        <DrawerLayout links={ this.state.links }>
          <Route exact path='/' component={() => { return <Hello />; }} />
          <Route exact path='/skills' component={() => { return <Skills />; }} />
          <Route exact path='/works' component={() => { return <Works />; }} />
        </DrawerLayout>
      </BrowserRouter>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withRoot(withStyles(styles, { withTheme : true })(App));