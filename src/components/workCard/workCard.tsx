import React from 'react';
import styles from './workCardStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Url } from 'url';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
};

/** 開発実績型定義 */
type Work = {
  /** 技術 */
  Skill : string[],
  /** 役割 */
  Rolle : String[],
  /** 人数 */
  Members : Number,
  /** URL */
  URL : Url,
  /** GitHub */
  GitHub : Url,
  /** 概要(1要素ずつ改行表示) */
  Overview : string[]
}

/** コンポーネント定義 */
class WorkCard extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }

  /** 開発実績を取得 */
  getWorks() : Work[]
  {
    return [];
  }

  /** レンダリング */
  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardMedia
          className={this.props.classes.media}
          image='http://pet-seikatsu.jp/images/2015/08/2d85d2a2063d1ed3b3271144167cdf85-large.jpg'
          title='Image Title'
        />
        <CardContent>
          <Typography component='h2' variant='h5' gutterBottom >
            ○×案件
          </Typography>
          <Paper elevation={0}>
            <Typography component="h3" variant="h6">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </Paper>
          <Paper elevation={0}>
            <Typography component="h3" variant="h6">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </Paper>
        </CardContent>
        <CardActions>
          <Button size='small' className={this.props.classes.cardButton} >詳細</Button>
        </CardActions>
      </Card>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(WorkCard);