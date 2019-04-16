import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './worksStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import WorkCard from '../workCard/workCard';
import { Work, works } from '../../datas/works';
import QueryUtil from '../../utils/queryUtil';
import { string } from 'prop-types';

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** 技術名フィルタ */
  skillFilters? : string[]
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
      skills : this.props.skillFilters,
      roleInput : '',
      roles : []
    };
  }

  /** URLパラメータ操作ユーティリティ */
  queryUtil = new QueryUtil().get(',');

  /** 絞込み入力イベント */
  handleInputChange = (name : string) => (e : ChangeEvent<HTMLTextAreaElement>) => {
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

  /** 追加リンクのURLを生成 */
  createAddUrl(filterKey : 'skills' | 'roles', value : string) : string {
    return `/works${this.queryUtil.add({ filterKey : value}).toString(['skills', 'filters'])}`;
  }

  /** 削除リンクのURLを生成 */
  createRemoveURL(filterKey : 'skills' | 'roles', value : string) : string {
    return `/works${this.queryUtil.remove(filterKey, value).toString(['skills', 'filters'])}`;
  }

  /** 開発実績を取得 */
  getWorks() : Work[]
  {
    // 返却するデータ
    let datas = works;

    // フィルタ
    let q = new QueryUtil();
    let params = q.get().params;
    let skills : string[] = (params && params.skills)? params.skills.split(',') : [];
    let roles : string[] = (params && params.rolles)? params.rolles.split(',') : [];

    if(skills && skills.length > 0)
    {
      datas = datas.filter((v) => {
        let ret : boolean = true;
        for (let i = 0; i < skills.length; i++)
        {
          if(v.Skill.indexOf(skills[i]) == -1)
          {
            ret = false;
            break;
          }
        }
        return ret;
      });
    }

    if(roles && roles.length > 0)
    {
      datas = datas.filter((v) => {
        let ret : boolean = true;
        for (let i = 0; i < roles.length; i++)
        {
          if(v.Role.indexOf(roles[i]) == -1)
          {
            ret = false;
            break;
          }
        }
        return ret;
      });
    }

    return datas;
  }

  /** 現在のURLパラメータに指定の値を追加したものを返却 */
  createParams(skill? : string , role? : string) {
    let q = new QueryUtil();
    let ret : string  = '';
    let temp : string[] = [];
    let params = q.get().params;

    if(params)
    {
      if(params.skills && skill && skill.length > 0)
      {
        let skills = Array.from(new Set([...params.skills, ...[skill]]));
        temp.push(`skills=${skills.join(',')}`);
      }

      if(params.roles && role && role.length > 0)
      {
        let roles = Array.from(new Set([...params.roles, ...[role]]));
        temp.push(`roles=${roles.join(',')}`);
      }
    }

    if(temp.length > 0)
    {
      ret = `?${temp.join('&')}`;
    }

    return ret;
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
              onChange = {this.handleInputChange('skillInput')}
              className = {this.props.classes.field}
              onKeyDown = {this.handleEnter('skillInput', this.state.skillInput)}
            />
            <TextField
              id='role'
              label = '役割'
              value = {this.state.roleInput}
              type='search'
              onChange = {this.handleInputChange('roleInput')}
              onKeyDown = {this.handleEnter('roleInput', this.state.roleInput)}
            />
            <a href={`/works${this.createParams(this.state.skillInput, this.state.roleInput)}`}>
              <Button variant='contained' color='primary' className={this.props.classes.addFilterButton}>
                絞込みに追加
              </Button>
            </a>
          </div>
          <div className={this.props.classes.filters}>
            {(this.state.skills == undefined)? null : this.state.skills.map((skill) => {
              return (
                <a href={this.createRemoveURL('skills', skill)}>
                  <Button
                    variant="contained" 
                    color="default" 
                    className={this.props.classes.filterButton}
                    key={`skillFilter-${skill}`}  >
                    {skill}
                    <DeleteIcon className={this.props.classes.filterIcon} />
                  </Button>
                </a>
              )
            })}
            {(this.state.roles == undefined)? null : this.state.roles.map((role) => {
              return (
                <a href={this.createRemoveURL('roles', role)}>
                  <Button
                    variant="contained" 
                    color="default" 
                    className={this.props.classes.filterButton}
                    key={`roleFilter-${role}`} >
                    {role}
                    <DeleteIcon className={this.props.classes.filterIcon} />
                  </Button>
                </a>
              )
            })}
          </div>
          <div className={this.props.classes.contents}>
            {
              (works.length == 0)? 
                <div className={this.props.classes.noResults}>検索結果がありません</div> : 
                works.map((work) => {
                  return (
                    <WorkCard 
                      workInfo={work} 
                      skillClickHandler={this.handleSkillClick} 
                      roleClickHandler={this.handleRoleClick}
                      key={`workCard-${work.Name}`} />)
                })
            }
          </div>
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Works);