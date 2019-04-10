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
import Card from '@material-ui/core/Card';
import MailOutline from '@material-ui/icons/MailOutline';
import { Fab } from '@material-ui/core';

/** ナビゲーションリンク */
export type Link = {
  /** 表示文字列 */
  text : string,
  /** 表示アイコン */
  icon? : JSX.Element | undefined,
  /** クリックイベント */
  click? : ((event : React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined,
  /** クリック後にナビゲーションを閉じるか否か */
  closeMenuAfterClick? : boolean | false,
  /** 現在選択中か否か */
  isSelected? : boolean | false
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
      mobileOpen : false
    };
  }

  /** Drawerの開閉 */
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  /** ナビゲーションクリック */ 
  handleClick = (link : Link) => {
    return (event : React.MouseEvent<HTMLElement, MouseEvent>) => { 
      if(link.click) link.click(event);
      if(link.closeMenuAfterClick) this.setState({ mobileOpen: false });
      
      this.props.links.forEach((links) => {
        links.forEach((l) => {
          if(l.text === link.text)
          {
            l.isSelected = true;
          }
          else
          {
            l.isSelected = false;
          }
        });
      });

    };
  };

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
              <ListItem 
                button 
                key={link.text} 
                onClick={ this.handleClick(link) } 
                className={this.props.classes.linkItem + ' ' + ((link.isSelected)? this.props.classes.selected : '') } >
                {(link.icon !== undefined)? <ListItemIcon>{link.icon}</ListItemIcon> : <React.Fragment />}
                <ListItemText primary={link.text} disableTypography={true} className={this.props.classes.linkText} />
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

  /** タイトルを取得 */
  getSiteTitle() : string {
    return '鍋綿ポートフォリオ';
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
              {this.getSiteTitle()}
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={this.props.classes.drawer}>
          {/* 
            画面幅が狭い場合に表示するDrawer
            SEO対策(重複コンテンツの回避)を行いたい場合には、この部分をJavaScriptで記述します。
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
            SEO対策(重複コンテンツの回避)を行いたい場合には、この部分をJavaScriptで記述します。
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
          {this.props.contents}
        </main>
      </div>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(DrawerLayout);