import React from 'react';
import { Link } from 'react-router-dom';
import styles from './workCardStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Work } from '../../datas/works';
import QueryUtil from '../../utils/queryUtil';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** 開発実績 */
  workInfo : Work,
  /** ナビゲーション発生時のコールバック */
  navigationHandler? : (url : string) => void
}

/** ステート型定義 */
type State = {
  /** ダイアログが開いているか否か */
  dialogOpen : boolean,
  /** ダイアログに表示する技術 */
  dialogSkills : string[]
};

/** コンポーネント定義 */
class WorkCard extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      dialogOpen : false,
      dialogSkills : []
    };
  }

  /** 追加リンクのURLを生成 */
  createAddUrl(filterKey : 'skills' | 'roles', value : string) : string {
    return `/works${new QueryUtil().get(',').add({ [filterKey] : [value] }).toString(['skills', 'roles'])}`;
  }

  /** ダイアログオープン */
  handleDialogOpen = (skills : string[]) => () => {
    this.setState({ dialogSkills : skills, dialogOpen: true });
  };

  /** ダイアログクローズ */
  handleDialogClose = () => {
    this.setState({ dialogSkills : [], dialogOpen: false });
  };

  /** ナビゲーション発生前のイベント */
  handleNavigate = (url : string) => () => {
    if(this.props.navigationHandler)
    {
      this.props.navigationHandler(url);
    }
  };

  /** レンダリング */
  render() {
    return (
      <React.Fragment>
        <Card className={this.props.classes.card} key={this.props.workInfo.Name} >
          <CardMedia
            className={this.props.classes.media}
            image={(this.props.workInfo.ImageUrl)? this.props.workInfo.ImageUrl : '/NoImage.jpg'}
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
                    <Link to={this.createAddUrl('skills', skill)} key={`link-${this.props.workInfo.Name}-${skill}`}>
                      <Button
                        color='primary'
                        className={this.props.classes.filterButton}
                        key={`${this.props.workInfo.Name}-${skill}`}
                        onClick={this.handleNavigate('works')} >
                        {skill}
                      </Button>
                    </Link>
                  );
                })}
                {
                  (this.props.workInfo.Skill.length > 3)?
                    <Button color='secondary' className={this.props.classes.filterButton} onClick={this.handleDialogOpen(this.props.workInfo.Skill)}>...</Button> : 
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
                    <Link to={this.createAddUrl('roles', role)} key={`link-${this.props.workInfo.Name}-${role}`}>
                      <Button
                        color='primary'
                        className={this.props.classes.filterButton}
                        key={`${this.props.workInfo.Name}-${role}`}
                        onClick={this.handleNavigate('works')}>
                        {role}
                      </Button>
                    </Link>
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
            {
              (this.props.workInfo.URL)?
                <Paper elevation={0} className={this.props.classes.cardSection} >
                  <Typography component="h3" variant="h6">
                    URL
                  </Typography>
                  <Typography component="p">
                    <a href={this.props.workInfo.URL} target='_blank' >{
                      (this.props.workInfo.URLDisp)?
                        this.props.workInfo.URLDisp :
                        this.props.workInfo.URL
                    }</a>
                  </Typography>
                </Paper> :
                null
            }
            {
              (this.props.workInfo.GitHub)?
                <Paper elevation={0} className={this.props.classes.cardSection} >
                  <Typography component="h3" variant="h6">
                    GitHub
                  </Typography>
                  <Typography component="p">
                    <a href={this.props.workInfo.GitHub} target='_blank' >{
                      (this.props.workInfo.GitHubDisp)?
                        this.props.workInfo.GitHubDisp :
                        this.props.workInfo.GitHub
                    }</a>
                  </Typography>
                </Paper> :
                null
            }
            <Paper elevation={0} className={this.props.classes.cardSection}>
              <Typography component="h3" variant="h6">
                概要
              </Typography>
              {this.props.workInfo.Overview.map((val) => {
                return (
                  <Typography component="p" key={`${this.props.workInfo.Name}-${val}`}>
                    {val}
                  </Typography>
                )
              })}
            </Paper>
          </CardContent>
        </Card>
        <Dialog
          fullWidth={false}
          maxWidth={'sm'}
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose}
          aria-labelledby='full-skills-dialog-title'
        >
          <DialogTitle id='full-skills-dialog-title'>すべての技術</DialogTitle>
          <DialogContentText className={this.props.classes.skillDialogContent}>
            {this.state.dialogSkills.map((skill) => {
              return (
                <Link to={this.createAddUrl('skills', skill)} key={`link-${this.props.workInfo.Name}-${skill}`} onClick={this.handleNavigate('works')}>
                  <Button
                    color='primary'
                    className={this.props.classes.filterButton}
                    key={`${this.props.workInfo.Name}-${skill}`} >
                    {skill}
                  </Button>
                </Link>
              );
            })}
          </DialogContentText>
        </Dialog>
      </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(WorkCard);