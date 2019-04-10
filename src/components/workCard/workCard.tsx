import React from 'react';
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

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  workInfo : Work,
  skillClickHandler : (value : string) => (e : React.MouseEvent<HTMLElement, MouseEvent>) => void,
  roleClickHandler : (value : string) => (e : React.MouseEvent<HTMLElement, MouseEvent>) => void
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

  /** ダイアログオープン */
  handleDialogOpen = (skills : string[]) => () => {
    this.setState({ dialogSkills : skills, dialogOpen: true });
  };

  /** ダイアログクローズ */
  handleDialogClose = () => {
    this.setState({ dialogSkills : [], dialogOpen: false });
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
                    <Button
                      color='primary'
                      className={this.props.classes.filterButton}
                      onClick={this.props.skillClickHandler(skill)}
                      key={`${this.props.workInfo.Name}-${skill}`} >
                      {skill}
                    </Button>
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
                    <Button
                      color='primary'
                      className={this.props.classes.filterButton}
                      onClick={this.props.roleClickHandler(role)}
                      key={`${this.props.workInfo.Name}-${role}`} >
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
                <Button
                  color='primary'
                  className={this.props.classes.filterButton}
                  onClick={this.props.skillClickHandler(skill)}
                  key={`${this.props.workInfo.Name}-${skill}`} >
                  {skill}
                </Button>
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