import React from 'react';
import { Link } from 'react-router-dom';
import styles from './skillCardStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import StarIconRated from '@material-ui/icons/Star';
import StarIcon from '@material-ui/icons/StarBorder';
import { Button } from '@material-ui/core';
import { SkillCategory, Skill } from '../../datas/skills';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** 技術情報 */
  skillInfo : SkillCategory,
  /** ナビゲーション発生時のコールバック */
  navigationHandler? : (url : string) => void
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class SkillCard extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }
  
  /** ナビゲーション発生前のイベント */
  handleNavigate = (url : string) => () => {
    if(this.props.navigationHandler)
    {
      this.props.navigationHandler(url);
    }
  };

  /** スターのレンダリング */
  renderStar(skill : Skill) {
    let ret : JSX.Element[] = [];
    for(let i = 1; i <= 5; i++)
    {
      ret.push((i <= skill.Stars)?
        <StarIconRated fontSize='small' key={`star${i}-${skill.Name}`} className={this.props.classes.star} /> :
        <StarIcon fontSize='small' key={`star${i}-${skill.Name}`} className={this.props.classes.star} />
      );
    }
    return ret;
  }

  /** レンダリング */
  render() {
    return (
      <Card className={this.props.classes.card} key={this.props.skillInfo.Category} >
        <CardContent>
          <Typography component='h2' variant='h5' gutterBottom >
            {this.props.skillInfo.Category}
          </Typography>
          {this.props.skillInfo.Skills.map((skill) => {
            return (
              <div className={this.props.classes.skill} key={skill.Name}>
                <span className={this.props.classes.skillName}>
                  {
                    (skill.HasWork)?
                    <Link to={`/works?skills=${encodeURIComponent(skill.Name)}`} key={`skill_link-${skill.Name}`}>
                      <Button 
                        color='primary' 
                        key={`link-${skill.Name}`} 
                        className={this.props.classes.skillLink}
                        onClick={this.handleNavigate('/works')}>
                          {skill.Name}
                      </Button>
                    </Link> :
                    <span className={this.props.classes.skillText}>{skill.Name}</span>
                  }
                </span>
                <span className={this.props.classes.stars} >
                  {this.renderStar(skill)}
                </span>
              </div>
            )
          })}
        </CardContent>
      </Card>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(SkillCard);