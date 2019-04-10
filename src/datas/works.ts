/** 開発実績の型 */
export type Work = {
    /** 実施時期 */
    Span? : string,
    /** 画像URL */
    ImageUrl? : string | '',
    /** 件名 */
    Name : string,
    /** 技術 */
    Skill : string[],
    /** 役割 */
    Role : string[],
    /** 人数 */
    Members : Number,
    /** URL */
    URL? : string,
    /** URL表示文字列 */
    URLDisp? : string,
    /** GitHub */
    GitHub? : string,
    /** GitHub表示文字列 */
    GitHubDisp? : string,
    /** 概要(1要素ずつ改行表示) */
    Overview : string[]
  }

/** 開発実績データ */
export const works : Work[] = [
    {
        Span : '2019年4月',
        ImageUrl : '/Portfolio.jpg',
        Name : 'ポートフォリオサイト構築',
        Skill : ['TYPESCRIPT', 'REACT', 'FIREBASE', 'JAVASCRIPT', 'HTML/CSS', 'WEBフロントエンド', 'NODE.JS'],
        Role : ['メンバー'],
        Members : 1,
        URL : 'https://portfolio.micknabewata.com/',
        URLDisp : '鍋綿ポートフォリオ',
        GitHub : 'https://github.com/MickNabewata/micknabewata-portfolio',
        GitHubDisp : 'micknabewata-portfolio',
        Overview : [
            '当サイトの企画・デザイン・構築を行いました。',
            'デザインセンスが無いので画像でごまかしました（笑'
        ]
    },
    {
        Span : '2018年6月 ～',
        Name : '情報収集・分析システム構築',
        Skill : ['C#', '.NET CORE/FRAMEWORK', 'AZURE', 'ASP.NET/ASP.NET CORE', 'HTML/CSS', 'サーバーサイド', 'WEBフロントエンド', 'WPF', 'WINDOWSコンソール(EXE)', 'POWER BI'],
        Role : ['営業','リーダー','メンバー'],
        Members : 3,
        Overview : [
            '既存システムから情報を集約する仕組みと',
            '追加の情報を登録する画面、',
            'それらを分析するレポートの構築を行いました。',
            '現在も小さな機能追加・変更を進めており、',
            '更に次のステップをご提案中です。'
        ]
    },
    {
        Span : '2017年4月 ～',
        Name : 'クラウドサービス構築',
        Skill : ['C#', '.NET CORE/FRAMEWORK', 'AZURE', 'ASP.NET/ASP.NET CORE', 'HTML/CSS', 'BOOTSTRAP', 'サーバーサイド', 'WEBフロントエンド', 'WINDOWSコンソール(EXE)'],
        Role : ['リーダー','メンバー'],
        Members : 3,
        Overview : [
            'AZUREでホストするWEB画面/API/',
            'データベース/バッチ処理を開発しました。',
            'AZURE ADへの認証周りが一番苦労しました。',
            '現在も細々と保守/改修を行っています。'
        ]
    },
    {
        Span : '2015年4月 ～ 2018年3月',
        Name : 'SharePoint情報集約サイト開発',
        Skill : ['SHAREPOINT ONLINE', 'JAVASCRIPT', 'HTML/CSS'],
        Role : ['営業','リーダー','メンバー'],
        Members : 3,
        Overview : [
            'クラシック標準機能のカスタマイズと',
            'SharePoint Designerでの',
            'ワークフロー構築を行いました。',
            'マスターページ変更やJavaScriptの記述、JSLink、',
            'SharePoint Designerでのカスタマイズなど',
            'クラシック機能を使い倒しました。',
        ]
    },
    {
        Span : '2013年4月 ～ 2015年3月',
        Name : 'SharePoint Server構築',
        Skill : ['SHAREPOINT SERVER', 'C#', 'JAVASCRIPT', 'HTML/CSS', 'POWERSHELL', 'サーバーサイド', 'WINDOWSデスクトップ(EXE)', 'WINDOWSコンソール(EXE)', 'WINDOWS SERVER', 'IIS', 'SQL SERVER'],
        Role : ['サブリーダー','メンバー'],
        Members : 3,
        Overview : [
            'SharePoint Serverの構築と',
            'それを使ったサイト作成・カスタマイズ、',
            'およびSharePoint Serverとやり取りする',
            '外付けのシステムを開発していました。',
            '1つの案件は1～3ヶ月程度と小規模で、',
            '平行して複数の案件を進めていました。',
            '思えば色々やったもんだ。（遠い目'
        ]
    },
    {
        Span : '2011年3月 ～ 2013年4月',
        Name : '複数の小規模システム構築',
        Skill : ['C#', '.NET CORE/FRAMEWORK', 'ASP.NET/ASP.NET CORE', 'JAVASCRIPT', 'HTML/CSS', 'VBA', 'VB SCRIPT', 'PHP', 'JAVA', 'OBJECTIVE-C', 'CAKE PHP', 'サーバーサイド', 'WINDOWSデスクトップ(EXE)', 'WINDOWSコンソール(EXE)', 'IPHONE', 'ANDROID', 'WINDOWS SERVER', 'IIS', 'SQL SERVER', 'MYSQL', 'AWS'],
        Role : ['サブリーダー','メンバー'],
        Members : 3,
        Overview : [
            '社内の受託案件で修行しました。',
            'プロジェクト内に熟練技術者が居ないだとか',
            '途中からサブリーダーだとかで苦労しましたが',
            'この時点までガッツリ開発に',
            '関わっていなかった自分にはいい経験でした。',
            '人数が少ないために設計から試験まで',
            '全工程に関われたのも良かったです。'
        ]
    },
    {
        Span : '2009年4月 ～ 2011年3月',
        Name : '保守開発',
        Skill : ['C#', '.NET CORE/FRAMEWORK', 'ASP.NET/ASP.NET CORE', 'JAVASCRIPT', 'HTML/CSS', 'サーバーサイド', 'WINDOWSデスクトップ(EXE)', 'WINDOWS SERVER', 'IIS', 'SQL SERVER'],
        Role : ['メンバー'],
        Members : 2,
        Overview : [
            '既存システムの保守開発に関わりました。',
            '開発は主に中国の企業に発注しており、',
            '自分は仕様の策定と試験ばかりしていました。',
            '1度だけ説明のために中国へも行きました。',
            '割と朴訥なシステムで、',
            '本番DBのデータを直接SQLでイジっていました。',
            '怖や怖や。'
        ]
    },
    {
        Span : '2007年4月 ～ 2009年3月',
        Name : 'BIレポート開発',
        Skill : ['SQL SERVER REPORTING SERVICES', 'SQL SERVER', 'COGNOS'],
        Role : ['メンバー'],
        Members : 5,
        Overview : [
            'キャリアの始まりはBIでした。',
            '私はプログラミングがしたかったのですが。。。',
            'COGNOSとかいう海外のBI製品と戦ったり、',
            'SSRSでレポートを作って',
            'SQLを書いたりしていました。',
            '手の空いた時にEXCELマクロを触って挫折したり、',
            'VB Scriptでのバッチ作成に挫折したり、',
            'まだまだ新兵でした。'
        ]
    }
];