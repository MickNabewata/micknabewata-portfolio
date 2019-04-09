import React from 'react';
import styles from './helloStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { hello } from '../../datas/hello';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class Hello extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }

  /** タイトル取得 */
  getTitle() : string {
    return 'Simple is the Best';
  }

  /** メッセージ取得 */
  getHello() : string[] {
    return hello;
  }

  /** タイトル要素生成 */
  createTitle() : JSX.Element {
    return (
      <Typography component='h1' gutterBottom className={this.props.classes.title}>
        { this.getTitle() }
      </Typography>
    );
  }

  /** 自己紹介要素生成 */
  createHello() : JSX.Element {
    let num : number = 0;
    return (
      <React.Fragment>
        {
          this.getHello().map((hello : string) => {
            num++;
            return <Typography key={num} component='p' className={this.props.classes.hello}>{hello}</Typography>
          })
        }
      </React.Fragment>
    );
  }

  /** レンダリング */
  render() {
    return (
        <React.Fragment>
          { this.createTitle() }
          <br />
          { this.createHello() }
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Hello);