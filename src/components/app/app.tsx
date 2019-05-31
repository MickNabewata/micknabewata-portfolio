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
import pages from '../../datas/pages';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
  /** 現在表示中ページのパス */
  currentPath : string
};

/** コンポーネント定義 */
class App extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      currentPath : '/'
    };
  }

  /** ナビゲーション発生前のイベント */
  handleNavigate(url : string) {
    this.setState({ currentPath : url });
    window.scrollTo(0, 0);
  };

  /** 固定のナビゲーション */
  staticLinks : NavLinks[] = 
  [
    [
      {
        text : pages.home.name,
        url : pages.home.path,
        icon : <AccountBox />,
        click : () => { this.handleNavigate(pages.home.path); },
        closeMenuAfterClick : true
      },
      {
        text : pages.skills.name,
        url : pages.skills.path,
        icon : <Stars />,
        click : () => { this.handleNavigate(pages.skills.path); },
        closeMenuAfterClick : true
      },
      {
        text : pages.works.name,
        url : pages.works.path,
        icon : <Work />,
        click : () => { this.handleNavigate(pages.works.path); },
        closeMenuAfterClick : true
      },
      {
        text : 'ブログ',
        url : 'https://www.micknabewata.com',
        icon : <Wallpaper />,
        closeMenuAfterClick : true
      },
      {
        text : '鍋綿のSharePoint部屋',
        url : 'https://sporoom.micknabewata.com',
        icon : <Wallpaper />,
        closeMenuAfterClick : true
      }
    ]
  ];

  /** レンダリング */
  render() {
    return (
      <BrowserRouter>
        <DrawerLayout links={ this.staticLinks } path={this.state.currentPath}>
          <Route exact path='/' component={() => { return <Hello pageInfo={pages.home} />; }} />
          <Route exact path='/skills' component={() => { return <Skills pageInfo={pages.skills} navigationHandler={(url : string) => { this.handleNavigate(url); }} />; }} />
          <Route exact path='/works' component={() => { return <Works pageInfo={pages.works} />; }} />
        </DrawerLayout>
      </BrowserRouter>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withRoot(withStyles(styles, { withTheme : true })(App));