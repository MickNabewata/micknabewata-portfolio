import React from 'react';
import Helmet from 'react-helmet';
 
/** プロパティ型定義 */
interface Prop {
  /** ページタイトル */
  pageTitle : string;

  /** ページ説明 */
  pageDescription : string;

  /** ページキーワード */
  pageKeywords : string[];

  /** ページサムネイル */
  pageThumbnail : string;

  /** canonical用ページURL */
  pagePath : string;
}

/** ステート型定義 */
type State = {
};

/** コンポーネント定義 */
export default class MyHelmet extends React.Component<Prop, State> {

  /** コンストラクタ */
  constructor(props : Prop)
  {
    super(props);

    // ステート初期化
    this.state = {
    };
  }

  /** レンダリング */
  render() {
    let props = { ...this.props };
    props.pageTitle = (props.pageTitle && props.pageTitle.length > 0)? `${props.pageTitle} - 鍋綿ポートフォリオ` : '鍋綿ポートフォリオ';
    props.pagePath = `${window.location.protocol}//${window.location.host}${props.pagePath}`;
    props.pageThumbnail = `${window.location.protocol}//${window.location.host}${props.pageThumbnail}`;

    return (
      <Helmet
        title={props.pageTitle}
        meta={
          [
            { name : 'description', content : props.pageDescription }, 
            { name : 'keywords', content : (props.pageKeywords)? props.pageKeywords.join(',') : '' },
            { name : 'thumbnail', content : props.pageThumbnail }
          ]
        }
        link={
          [
            { rel : 'canonical', href : props.pagePath }
          ]
        }
      />
    );
  }
}