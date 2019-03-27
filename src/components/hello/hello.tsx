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

  /** レンダリング */
  render() {
    return (
        <React.Fragment>
          <Typography component="h1" variant="h4" gutterBottom className={this.props.classes.title}>
            Simple is the Best
          </Typography>
          <br />
          <Typography variant="body1" gutterBottom>
            当サイトへご訪問頂きありがとうございます。
          </Typography>
          <Typography variant="body1" gutterBottom>
            私は業務アプリケーション開発とOffice 365を得意とする34歳エンジニア♂です。
          </Typography>
          <Typography variant="body1" gutterBottom>
            正社員として勤務する傍ら、システム構築の楽しさと
          </Typography>
          <Typography variant="body1" gutterBottom>
            新しい技術を活かす機会とお金を求めて副業をしています。
          </Typography>
          <Typography variant="body1" gutterBottom>
            好きな技術はSPAとAPIとSharePointです。
          </Typography>
          <Typography variant="body1" gutterBottom>
            好きな業務はIT化の相談に乗ってシンプルな業務とシステムを描くことです。
          </Typography>
          <Typography variant="body1" gutterBottom>
            今日も元気にシンプルに。
          </Typography>
          <Typography variant="body1" gutterBottom>
            世界はシンプルさを求めています。（たぶん
          </Typography>
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Hello);