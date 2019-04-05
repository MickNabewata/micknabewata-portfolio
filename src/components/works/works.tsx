import React, { ChangeEvent } from 'react';
import styles from './worksStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import WorkCard, { Work } from '../workCard/workCard';
import { Button } from '@material-ui/core';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
}

/** ステート型定義 */
type State = {
  /** 技術の入力値 */
  skillInput? : string,
  /** 技術の絞込み */
  skills? : string[],
  /** 役割の入力値 */
  roleInput? : string,
  /** 役割の絞込み */
  roles? : string[]
};

/** コンポーネント定義 */
class Works extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
      skillInput : '',
      skills : [],
      roleInput : '',
      roles : []
    };
  }

  /** 絞込み入力イベント */
  handleChange = (name : string) => (e : ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      [name]: e.target.value
    });
  };

  /** 絞込み入力フィールドのエンターキーイベント */
  handleEnter = (name : 'skillInput' | 'roleInput') => (e : React.KeyboardEvent<HTMLDivElement>) => {
    if(e.keyCode === 13)
    {
      this.addFilter(name);
    }
  }

  /** 絞込みに追加ボタンイベント */
  handleAddFilter = (e : React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.addFilter('skillInput');
    this.addFilter('roleInput');
  }

  /** 絞込みに追加 */
  addFilter(filterKey : 'skillInput' | 'roleInput') {

    let filterValue = (filterKey == 'skillInput')? this.state.skillInput : this.state.roleInput;

    if(filterValue && filterValue.trim())
    {
      filterValue = filterValue.trim();
      alert('key:' + filterKey + ', value:' + filterValue);
      this.setState({
        [filterKey] : ''
      });
    }
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
          <div className={this.props.classes.filters}>
            <TextField
              id='skill'
              label = '技術'
              value = {this.state.skillInput}
              onChange = {this.handleChange('skillInput')}
              className = {this.props.classes.filter}
              onKeyDown = {this.handleEnter('skillInput')}
            />
            <TextField
              id='role'
              label = '役割'
              value = {this.state.roleInput}
              onChange = {this.handleChange('roleInput')}
              onKeyDown = {this.handleEnter('roleInput')}
            />
            <Button variant='contained' color='primary' className={this.props.classes.addFilterButton} onClick={this.handleAddFilter} >
              絞込みに追加
            </Button>
          </div>
          {works.map((work) => {
            return <WorkCard workInfo={work} />
          })}
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Works);