import React from 'react';
import styles from './appStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Mail from '@material-ui/icons/Mail';
import withRoot from '../../withRoot';
import DrawerLayout, { Links } from '../drawerLayout/drawerLayout';
import SampleContent1 from '../sampleContent1/sampleContent1';
import SampleContent2 from '../sampleContent2/sampleContent2';
import SampleContent3 from '../sampleContent3/sampleContent3';
import './app.css';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
  contents : JSX.Element,
  links : Links[]
};

/** ナビゲーションで切り替えるコンポーネントの一覧 */
type componentNames = 'sampleContent1' | 'sampleContent2' | 'sampleContent3';

/** コンポーネント定義 */
class App extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      contents : <SampleContent1 />,
      links : this.staticLinks
    };
  }

  /** 固定のナビゲーション */
  staticLinks : Links[] = [
    [
      {
        text : 'sampleContent1',
        icon : <Mail />,
        click : (event) => {
          this.setState({ contents : <SampleContent1 /> });
        }
      },
      {
        text : 'sampleContent2',
        icon : <Mail />,
        click : (event) => {
          this.setState({ contents : <SampleContent2 /> });
        }
      }
    ],
    [
      {
        text : 'sampleContent3',
        icon : <Mail />,
        click : (event) => {
          this.setState({ contents : <SampleContent3 /> });
        }
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