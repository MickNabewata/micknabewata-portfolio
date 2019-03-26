import React from 'react';
import styles from './appStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Mail from '@material-ui/icons/Mail';
import withRoot from '../../withRoot';
import DrawerLayout, { Links } from '../drawerLayout/drawerLayout';
import Hello from '../hello/hello';
import Skills from '../skills/skills';
import Works from '../works/works';
import './app.css';

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
        text : '自己紹介',
        icon : <Mail />,
        click : (event) => {
          this.setState({ contents : <Hello /> });
        },
        closeMenuAfterClick : true
      },
      {
        text : '技術',
        icon : <Mail />,
        click : (event) => {
          this.setState({ contents : <Skills /> });
        },
        closeMenuAfterClick : true
      }
    ],
    [
      {
        text : '開発実績',
        icon : <Mail />,
        click : (event) => {
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