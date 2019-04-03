import React from 'react';
import styles from './worksStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import WorkCard, { Work } from '../workCard/workCard';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
class Works extends React.Component<Prop, State> {

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
    return [
      {
        ImageUrl : 'http://pet-seikatsu.jp/images/2015/08/2d85d2a2063d1ed3b3271144167cdf85-large.jpg',
        Name : 'Sample1',
        Skill : ['C#', '', 'ASP.NET', ''],
        Role : ['メンバー', '', 'リーダー', ''],
        Members : 1,
        URL : 'http://google.co.jp',
        GitHub : 'http://yahoo.co.jp',
        Overview : ['行1','行2','','行3']
      },
      {
        ImageUrl : 'http://pet-seikatsu.jp/images/2015/08/2d85d2a2063d1ed3b3271144167cdf85-large.jpg',
        Name : 'Sample2',
        Skill : ['C#'],
        Role : ['メンバー'],
        Members : 2,
        URL : 'http://google.co.jp',
        GitHub : 'http://yahoo.co.jp',
        Overview : ['行1']
      },
      {
        ImageUrl : '',
        Name : '',
        Skill : [''],
        Role : [''],
        Members : 3,
        URL : '',
        GitHub : '',
        Overview : ['']
      },
      {
        Skill : [''],
        Name : '',
        Role : [''],
        Members : 4,
        Overview : ['']
      },
      {
        ImageUrl : undefined,
        Name : '',
        Skill : [],
        Role : [],
        URL : undefined,
        GitHub : undefined,
        Members : 5,
        Overview : []
      },
    ];
  }

  /** レンダリング */
  render() {

    let works = this.getWorks();

    return (
        <React.Fragment>
          {works.map((work) => {
            return <WorkCard workInfo={work} />
          })}
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Works);