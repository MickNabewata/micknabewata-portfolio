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

/** プロパティ型定義 */
interface Prop extends WithStyles<typeof styles> {
  /** 技術名フィルタ */
  skillFilters? : string[],
  /** ナビゲーション発生時のコールバック */
  navigationHandler? : (url : string) => {}
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
      //this.addFilter(filterKey, filterValue);
    }
  }

  /** 絞込みに追加リンクのURLを生成 */
  createAddFilterURL() {
    let util = new QueryUtil();
    util.get(',');
    if(this.state.skillInput) util.add({ 'skills' : [this.state.skillInput] });
    if(this.state.roleInput) util.add({ 'roles' : [this.state.roleInput] });
    return `/works${util.toString(['skills', 'roles'])}`;
  }

  /** 追加リンクのURLを生成 */
  createAddUrl(filterKey : 'skills' | 'roles', value : string) : string {
    return `/works${new QueryUtil().get(',').add({ [filterKey] : [value] }).toString(['skills', 'roles'])}`;
  }

  /** 削除リンクのURLを生成 */
  createRemoveURL(filterKey : 'skills' | 'roles', value : string) : string {
    return `/works${new QueryUtil().get(',').remove(filterKey, value).toString(['skills', 'roles'])}`;
  }

  /** フィルタ要素を生成 */
  createFilterElements(filterKey : 'skills' | 'roles') : JSX.Element {
    let params = new QueryUtil().get(',').params;
    return (
      <React.Fragment>
        {(!params[filterKey])? null : params[filterKey].map((value : string) => {
          return (
            <Link to={this.createRemoveURL(filterKey, value)} className={this.props.classes.filterLink} key={`link-${filterKey}Filter-${value}`}>
              <Button
                variant="contained" 
                color="default" 
                className={this.props.classes.filterButton}
                key={`${filterKey}Filter-${value}`}>
                {value}
                <DeleteIcon className={this.props.classes.filterIcon} />
              </Button>
            </Link>
          )
        })}
      </React.Fragment>
    );
  }

  /** 開発実績を取得 */
  getWorks() : Work[]
  {
    // 返却するデータ
    let datas = works;

    // フィルタ
    let q = new QueryUtil();
    let params = q.get(',').params;
    let skills : string[] = (params && params.skills)? params && params.skills : [];
    let roles : string[] = (params && params.roles)? params && params.roles : [];

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
            <Link to={this.createAddFilterURL()} className={this.props.classes.addFilterLink}>
              <Button variant='contained' color='primary' className={this.props.classes.addFilterButton} disabled={(!this.state.skillInput && !this.state.roleInput)}>
                絞込みに追加
              </Button>
            </Link>
          </div>
          <div className={this.props.classes.filters}>
            {this.createFilterElements('skills')}
            {this.createFilterElements('roles')}
          </div>
          <div className={this.props.classes.contents}>
            {
              (works.length == 0)? 
                <div className={this.props.classes.noResults}>検索結果がありません</div> : 
                works.map((work) => {
                  return (
                    <WorkCard 
                      workInfo={work}
                      key={`workCard-${work.Name}`}
                      navigationHandler={this.props.navigationHandler} />)
                })
            }
          </div>
        </React.Fragment>
    );
  }
}

/** テーマとスタイルをプロパティに含めて返却 */
export default withStyles(styles, { withTheme : true })(Works);