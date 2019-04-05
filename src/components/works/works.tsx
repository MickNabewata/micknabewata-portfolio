import React, { ChangeEvent } from 'react';
import styles from './worksStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import WorkCard, { Work } from '../workCard/workCard';
import { isDuplicate } from '../../utils/arrayUtil';

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
  handleEnter = (filterKey : 'skillInput' | 'roleInput', filterValue : string | undefined) => (e : React.KeyboardEvent<HTMLDivElement>) => {
    if(e.keyCode === 13)
    {
      this.addFilter(filterKey, filterValue);
    }
  }

  /** 絞込みに追加ボタンイベント */
  handleAddFilter = (e : React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.addFilter('skillInput', this.state.skillInput);
    this.addFilter('roleInput', this.state.roleInput);
  }

  /** フィルタ削除イベント */
  handleDeleteFilter = (filterKey : 'skills' | 'roles', filterValue : string) => (e : React.MouseEvent<HTMLElement, MouseEvent>) => {
    let values = (filterKey == 'skills')? this.state.skills : this.state.roles;
    if(values != undefined)
    {
      this.setState({
        [filterKey] : values.filter((v) => v != filterValue)
      });
    }
  }

  /** 技術クリックイベント */
  handleSkillClick = (value : string) => (e : React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.addFilter('skillInput', value);
  };

  /** 役割クリックイベント */
  handleRoleClick = (value : string) => (e : React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.addFilter('roleInput', value);
  };

  /** 絞込みに追加 */
  addFilter(filterKey : 'skillInput' | 'roleInput', filterValue : string | undefined) {

    let filterArrayKey = (filterKey == 'skillInput')? 'skills' : 'roles';
    let filterArray = (filterKey == 'skillInput')? this.state.skills : this.state.roles;
    let filter = (filterArray != undefined)? filterArray : [];

    if(filterValue && filterValue.trim())
    {
      filterValue = filterValue.trim().toUpperCase();
      this.setState({
        [filterArrayKey] : Array.from(new Set([...filter, ...[filterValue]])),
        [filterKey] : ''
      });
    }
  }

  /** 開発実績を取得 */
  getWorks() : Work[]
  {
    // 返却するデータ
    let datas : Work[] = [
      {
        ImageUrl : 'http://pet-seikatsu.jp/images/2015/08/2d85d2a2063d1ed3b3271144167cdf85-large.jpg',
        Name : 'Sample1',
        Skill : ['C#', 'ASP.NET', 'SHAREPOINT ONLINE', 'WINDOWS SERVER 2012', 'SQL SERVER 2013', '謎技術'],
        Role : ['メンバー', 'リーダー'],
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
        Skill : [],
        Role : [],
        Members : 3,
        URL : '',
        GitHub : '',
        Overview : ['']
      },
      {
        Skill : [],
        Name : '',
        Role : [],
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

    // フィルタ
    let skills : string[] = (this.state.skills)? this.state.skills : [];
    let roles : string[] = (this.state.roles)? this.state.roles : [];

    if(skills && skills.length > 0)
    {
      datas = datas.filter((v) => isDuplicate(v.Skill, skills));
    }

    if(roles && roles.length > 0)
    {
      datas = datas.filter((v) => isDuplicate(v.Role, roles));
    }

    return datas;
  }

  /** レンダリング */
  render() {

    // 開発実績を取得
    let works = this.getWorks();

    // 要素を作成
    return (
        <React.Fragment>
          <div className={this.props.classes.fields}>
            <TextField
              id='skill'
              label = '技術'
              value = {this.state.skillInput}
              type='search'
              onChange = {this.handleChange('skillInput')}
              className = {this.props.classes.field}
              onKeyDown = {this.handleEnter('skillInput', this.state.skillInput)}
            />
            <TextField
              id='role'
              label = '役割'
              value = {this.state.roleInput}
              type='search'
              onChange = {this.handleChange('roleInput')}
              onKeyDown = {this.handleEnter('roleInput', this.state.roleInput)}
            />
            <Button variant='contained' color='primary' className={this.props.classes.addFilterButton} onClick={this.handleAddFilter} >
              絞込みに追加
            </Button>
          </div>
          <div className={this.props.classes.filters}>
            {(this.state.skills == undefined)? null : this.state.skills.map((skill) => {
              return (
                <Button
                  variant="contained" 
                  color="default" 
                  className={this.props.classes.filterButton} 
                  onClick={this.handleDeleteFilter('skills', skill)} >
                  {skill}
                  <DeleteIcon className={this.props.classes.filterIcon} />
                </Button>
              )
            })}
            {(this.state.roles == undefined)? null : this.state.roles.map((role) => {
              return (
                <Button
                  variant="contained" 
                  color="default" 
                  className={this.props.classes.filterButton} 
                  onClick={this.handleDeleteFilter('roles', role)} >
                  {role}
                  <DeleteIcon className={this.props.classes.filterIcon} />
                </Button>
              )
            })}
          </div>
          <div className={this.props.classes.contents}>
            {
              (works.length == 0)? 
                <div className={this.props.classes.noResults}>検索結果がありません</div> : 
                works.map((work) => {
                  return <WorkCard workInfo={work} skillClickHandler={this.handleSkillClick} roleClickHandler={this.handleRoleClick} />
                })
            }
          </div>
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Works);