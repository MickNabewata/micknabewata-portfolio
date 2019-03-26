import React from 'react';
import styles from './drawerLayoutStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/** ナビゲーションリンク */
export type Link = {
  /** 表示文字列 */
  text : string,
  /** 表示アイコン */
  icon? : JSX.Element | undefined,
  /** クリックイベント */
  click? : ((event : React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined,
  /** クリック後にナビゲーションを閉じるか否か */
  closeMenuAfterClick? : boolean | false
};

/** ナビゲーションリンク配列 */
export type Links = Link[];

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** ナビゲーションリンク(1要素ずつDividerで区切られる) */
  links : Links[],
  /** メイン領域に表示するコンポーネント */
  contents : JSX.Element
}

/** ステート型定義 */
type State = {
  mobileOpen : boolean
};

/** コンポーネント定義 */
class DrawerLayout extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      mobileOpen : false
    };
  }

  /** Drawerの開閉 */
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  /** ナビゲーションクリック */ 
  handleClick = (callBack? : (event : React.MouseEvent<HTMLElement, MouseEvent>) => void | undefined, closeMenuAfterClick? : boolean | false) => {
    return (event : React.MouseEvent<HTMLElement, MouseEvent>) => { 
      if(callBack) callBack(event);
      if(closeMenuAfterClick) this.setState({ mobileOpen: false });
    };
  }

  num : number = 0;

  /** Drawer内のLinkコントロールを生成 */
  createList(links : Link[]) : JSX.Element
  {
    this.num++;

    return (
      <React.Fragment key={'fragment-' + this.num}>
        <Divider />
        <List>
          {links.map((link : Link) => {
            return (
              <ListItem button key={link.text} onClick={ this.handleClick(link.click, link.closeMenuAfterClick) } >
                {(link.icon !== undefined)? <ListItemIcon>{link.icon}</ListItemIcon> : <React.Fragment />}
                <ListItemText primary={link.text} />
              </ListItem>
            )
          })}
        </List>
      </React.Fragment>  
    );
  }

  /** Drawerコントロールを生成 */
  createDrawer() : JSX.Element
  {
    return (
      <div>
        <div className={this.props.classes.toolbar} />
        {this.props.links.map((links : Link[]) => {
          return this.createList(links);
        })}
      </div>
    );
  }

  /** レンダリング */
  render() {

    // Drawerコントロール
    let drawer : JSX.Element = this.createDrawer();

    return (
      // ルート要素
      <div className={this.props.classes.root}>
        <AppBar position='fixed' className={this.props.classes.appBar}>
          <Toolbar>
            {/* このアイコンボタンはmenuButtonクラスでのスタイル指定により画面幅が狭い場合にしか表示されない */}
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerToggle}
              className={this.props.classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            {/* タイトル文言 */}
            <Typography variant='h6' color='inherit' className={this.props.classes.title} noWrap>
              MickNabewata's portfolio
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={this.props.classes.drawer}>
          {/* 
            画面幅が狭い場合に表示するDrawer
            SEO対策(重複コンテンツの回避)を行いたい場合には、この部分をJavaScriptで記述します。
          */}
          <Hidden smUp implementation='css'>
            <Drawer
              //container={this.props.container}
              variant='temporary'
              //anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              anchor='left'
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: this.props.classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          {/* 
            画面幅が広い場合に表示するDrawer
            SEO対策(重複コンテンツの回避)を行いたい場合には、この部分をJavaScriptで記述します。
          */}
          <Hidden xsDown implementation='css'>
            <Drawer
              classes={{
                paper: this.props.classes.drawerPaper,
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        {/* メイン領域 */}
        <main className={this.props.classes.content}>
          <div className={this.props.classes.toolbar} />
          {this.props.contents}
        </main>
      </div>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(DrawerLayout);