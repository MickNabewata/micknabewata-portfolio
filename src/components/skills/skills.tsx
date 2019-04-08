import React from 'react';
import styles from './skillsStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import SkillCard, { SkillCategory, Skill } from '../skillCard/skillCard';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
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

  getSkills() : SkillCategory[] {
    let datas : SkillCategory[] = [
      {
        Category : '開発言語',
        Skills : [
          {
            Name : 'C#',
            Stars : 3,
            HasWork : true
          },
          {
            Name : 'JAVASCRIPT',
            Stars : 2,
            HasWork : true
          },
          {
            Name : 'VBA',
            Stars : 1,
            HasWork : true
          }
        ],
      },
      {
        Category : 'フレームワーク',
        Skills : [
          {
            Name : '.NET FRAMEWORK',
            Stars : 3,
            HasWork : true
          },
          {
            Name : '.NET CORE',
            Stars : 2,
            HasWork : true
          },
          {
            Name : 'REACT',
            Stars : 1,
            HasWork : true
          }
        ],
      },
      {
        Category : 'OS',
        Skills : [
          {
            Name : 'WINDOWS',
            Stars : 3,
            HasWork : false
          },
          {
            Name : 'LINUX',
            Stars : 2,
            HasWork : false
          },
          {
            Name : 'WINDOWS SERVER',
            Stars : 1,
            HasWork : false
          }
        ],
      },
      {
        Category : 'データベース',
        Skills : [
          {
            Name : 'SQL SERVER',
            Stars : 3,
            HasWork : true
          },
          {
            Name : 'MYSQL',
            Stars : 2,
            HasWork : false
          }
        ],
      }
    ];

    return datas;
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
                      key={`skillCard-${skill.Category}`} />)
                })
            }
          </div>
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Skills);