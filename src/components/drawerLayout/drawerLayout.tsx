import React from 'react';
import { Link } from 'react-router-dom';
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
import Card from '@material-ui/core/Card';
import MailOutline from '@material-ui/icons/MailOutline';
import { Fab } from '@material-ui/core';

/** ナビゲーションリンク */
export type NavLink = {
  /** 表示文字列 */
  text : string,
  /** URL */
  url : string,
  /** 表示アイコン */
  icon? : JSX.Element | undefined,
  /** クリックイベント */
  click? : ((event : React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined,
  /** クリック後にナビゲーションを閉じるか否か */
  closeMenuAfterClick? : boolean | false
};

/** ナビゲーションリンク配列 */
export type NavLinks = NavLink[];

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** ナビゲーションリンク(1要素ずつDividerで区切られる) */
  links : NavLinks[],
  /** 現在表示中ページのパス */
  path : string
}

/** ステート型定義 */
type State = {
  /** ナビゲーションリンク(1要素ずつDividerで区切られる) */
  links : NavLinks[],
  /** Drawerの開閉状態(モバイル表示で利用) */
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
      links : this.props.links,
      mobileOpen : false
    };
  }

  /** Drawerの開閉 */
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  /** ナビゲーションクリック */ 
  handleClick = (link : NavLink) => {
    return (event : React.MouseEvent<HTMLElement, MouseEvent>) => {
      // クリックイベント発火
      if(link.click) link.click(event);
      // メニューを閉じる
      if(link.closeMenuAfterClick) this.setState({ mobileOpen: false });
    };
  };

  linksCount : number = 0;

  /** Drawer内のLinkコントロールを生成 */
  createList(links : NavLink[]) : JSX.Element
  {
    this.linksCount++;
    return (
      <React.Fragment key={`navFrag-${this.linksCount}`}>
        <Divider />
        <List>
          {links.map((link : NavLink) => {
            let listItem = (
              <ListItem 
                button 
                key={`navItem-${link.text}`} 
                onClick={ this.handleClick(link) } 
                className={this.props.classes.linkItem + ' ' + ((link.url == this.props.path)? this.props.classes.selected : '') } >
                {(link.icon !== undefined)? <ListItemIcon>{link.icon}</ListItemIcon> : <React.Fragment />}
                <ListItemText primary={link.text} disableTypography={true} className={this.props.classes.linkText} />
              </ListItem>
            );
            return (
              (link.url.startsWith('http'))?
                <a href={link.url} target='_blank' key={`navlink-${link.text}`}>
                  {listItem}
                </a>:
                <Link to={link.url} key={`navlink-${link.text}`} >
                  {listItem}
                </Link>
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
        {this.state.links.map((links : NavLink[]) => {
          return this.createList(links);
        })}
        <Card className={this.props.classes.contactField}>
          <Fab 
            size='small' 
            href='https://twitter.com/intent/tweet?screen_name=MNabewata' 
            target='_blank' 
            className={this.props.classes.contactButton}>
            <img src='./TwitterIcon.png' className={this.props.classes.contactImage}/>
          </Fab>
          <Fab 
            size='small' 
            color='primary' 
            aria-label='MailTo' 
            href='mailto:aquarius.mikito.0123@gmail.com'
            className={this.props.classes.contactButton}>
            <MailOutline />
          </Fab>
        </Card>
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
            <Typography color='inherit' className={this.props.classes.title} noWrap>
              鍋綿ポートフォリオ
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={this.props.classes.drawer}>
          {/* 
            画面幅が狭い場合に表示するDrawer
          */}
          <Hidden mdUp implementation='css'>
            <Drawer
              variant='temporary'
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
          */}
          <Hidden smDown implementation='css'>
            <div>
              <Drawer
                classes={{paper: this.props.classes.drawerPaper}}
                variant='permanent'
                open
              >
                {drawer}
              </Drawer>
            </div>
          </Hidden>
        </nav>
        {/* メイン領域 */}
        <main className={this.props.classes.content}>
          <div className={this.props.classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(DrawerLayout);