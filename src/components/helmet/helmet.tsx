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
    props.pagePath = `${window.location.protocol}//${window.location.host}${props.pagePath}`;
    props.pageThumbnail = `${window.location.protocol}//${window.location.host}${props.pageThumbnail}`;

    return (
      <Helmet
        meta={
          [
            { name : 'description', content : props.pageDescription }, 
            { name : 'keywords', content : (props.pageKeywords)? props.pageKeywords.join(',') : '' },
            { property : 'og:site_name', content : '鍋綿ポートフォリオ' },
            { property : 'og:title', content : props.pageTitle },
            { property : 'og:description', content : props.pageDescription },
            { property : 'og:type', content : 'website' },
            { property : 'og:image', content : props.pageThumbnail },
            /* Twitter属性を動的に追加しても認識してくれなかったので削除
            { name : 'twitter:card', content : 'summary' },
            { name : 'twitter:site', content : '@MNabewata' },
            { name : 'twitter:title', content : props.pageTitle },
            { name : 'twitter:text', content : props.pageDescription },
            { name : 'twitter:description', content : props.pageDescription },
            { name : 'twitter:image', content : props.pageThumbnail }*/
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