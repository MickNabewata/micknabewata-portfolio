import React from 'react';
import styles from './skillsStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import SkillCard from '../skillCard/skillCard';
import { SkillCategory, skills } from '../../datas/skills';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** ナビゲーション発生時のコールバック */
  navigationHandler? : (url : string) => void
}

/** ステート型定義 */
type State = {
  /** スター数 */
  stars : 0 | 1 | 2 | 3 | 4 | 5
};

/** コンポーネント定義 */
class Skills extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      stars : 0
    };
  }

  /** 技術データ取得 */
  getSkills() : SkillCategory[] {
    return skills;
  }

  /** レンダリング */
  render() {
    let skills = this.getSkills();

    return (
        <React.Fragment>
          <div className={this.props.classes.contents}>
            {
              (skills.length == 0)? 
                <div className={this.props.classes.noResults}>検索結果がありません</div> : 
                skills.map((skill) => {
                  return (
                    <SkillCard 
                      skillInfo={skill} 
                      key={`skillCard-${skill.Category}`}
                      navigationHandler={this.props.navigationHandler} />)
                })
            }
          </div>
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Skills);