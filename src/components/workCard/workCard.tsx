import React from 'react';
import styles from './workCardStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  workInfo : Work,
  skillClickHandler : (value : string) => (e : React.MouseEvent<HTMLElement, MouseEvent>) => void,
  roleClickHandler : (value : string) => (e : React.MouseEvent<HTMLElement, MouseEvent>) => void
}

/** ステート型定義 */
type State = {
};

/** 開発実績型定義 */
export type Work = {
  /** 画像URL */
  ImageUrl? : string | '',
  /** 件名 */
  Name : string,
  /** 技術 */
  Skill : string[],
  /** 役割 */
  Role : string[],
  /** 人数 */
  Members : Number,
  /** URL */
  URL? : string,
  /** GitHub */
  GitHub? : string,
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

  /** レンダリング */
  render() {
    return (
      <Card className={this.props.classes.card}>
        <CardMedia
          className={this.props.classes.media}
          image={this.props.workInfo.ImageUrl}
          title={this.props.workInfo.Name}
        />
        <CardContent>
          <Typography component='h2' variant='h5' gutterBottom >
            {this.props.workInfo.Name}
          </Typography>
          <Paper elevation={0} className={this.props.classes.cardSection} >
            <Typography component="h3" variant="h6">
              技術
            </Typography>
            <Typography component="p">
              {this.props.workInfo.Skill.slice(0, 3).map((skill) => {
                return (
                  <Button color='primary' className={this.props.classes.filterButton} onClick={this.props.skillClickHandler(skill)}>
                    {skill}
                  </Button>
                );
              })}
              {
                (this.props.workInfo.Skill.length > 2)?
                <Button color='secondary' className={this.props.classes.filterButton} >
                  ...
                </Button> : 
                null
              }
            </Typography>
          </Paper>
          <Paper elevation={0} className={this.props.classes.cardSection + ',' + this.props.classes.noMarginTop}>
            <Typography component="h3" variant="h6">
              役割
            </Typography>
            <Typography component="p">
              {this.props.workInfo.Role.slice(0, 3).map((role) => {
                return (
                  <Button color='primary' className={this.props.classes.filterButton} onClick={this.props.roleClickHandler(role)}>
                    {role}
                  </Button>
                );
              })}
            </Typography>
          </Paper>
          <Paper elevation={0} className={this.props.classes.cardSection + ',' + this.props.classes.noMarginTop}>
            <Typography component="h3" variant="h6">
              人数
            </Typography>
            <Typography component="p">
              {this.props.workInfo.Members}
            </Typography>
          </Paper>
          <Paper elevation={0} className={this.props.classes.cardSection}>
            <Typography component="h3" variant="h6">
              URL
            </Typography>
            <Typography component="p">
              {this.props.workInfo.URL}
            </Typography>
          </Paper>
          <Paper elevation={0} className={this.props.classes.cardSection}>
            <Typography component="h3" variant="h6">
              GitHub
            </Typography>
            <Typography component="p">
              {this.props.workInfo.GitHub}
            </Typography>
          </Paper>
          <Paper elevation={0} className={this.props.classes.cardSection}>
            <Typography component="h3" variant="h6">
              概要
            </Typography>
            {this.props.workInfo.Overview.map((val) => {
              return (
                <Typography component="p">
                  {val}
                </Typography>
              )
            })}
          </Paper>
        </CardContent>
      </Card>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(WorkCard);