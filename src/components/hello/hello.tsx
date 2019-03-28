import React from 'react';
import styles from './helloStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

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
    return [
      '当サイトへご訪問頂きありがとうございます。',
      '私は業務アプリケーション開発とOffice 365を得意とする34歳エンジニア♂です。',
      '正社員として勤務する傍ら、システム構築の楽しさと',
      '新しい技術を活かす機会とお金を求めて副業をしています。',
      '好きな技術はSPAとAPIとSharePointです。',
      '好きな業務はIT化の相談に乗ってシンプルな業務とシステムを描くことです。',
      '今日も元気にシンプルに。',
      '世界はシンプルさを求めています。（たぶん'
    ];
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
            return <Typography key={num} component='p' gutterBottom className={this.props.classes.hello}>{hello}</Typography>
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