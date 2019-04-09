/** 技術カテゴリ型定義 */
export type SkillCategory = {
    /** カテゴリ */
    Category : string,
    /** 技術 */
    Skills : Skill[]
}

/** 技術型定義 */
export type Skill = {
    /** 技術名 */
    Name : string,
    /** スター数 */
    Stars : number,
    /** 実績有無 */
    HasWork : boolean
}

/** 技術データ */
export const skills : SkillCategory[] = [
    {
      Category : '開発言語',
      Skills : [
        {
          Name : 'C#',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'TYPESCRIPT',
          Stars : 5,
          HasWork : true
        },
        {
          Name : 'JAVASCRIPT',
          Stars : 5,
          HasWork : true
        },
        {
          Name : 'HTML/CSS',
          Stars : 5,
          HasWork : true
        },
        {
          Name : 'POWERSHELL',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'VBA',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'VB SCRIPT',
          Stars : 4,
          HasWork : false
        },
        {
          Name : 'JAVA',
          Stars : 3,
          HasWork : false
        },
        {
          Name : 'PHP',
          Stars : 3,
          HasWork : false
        },
        {
          Name : 'PYTHON',
          Stars : 3,
          HasWork : false
        },
        {
          Name : 'OBJECTIVE-C',
          Stars : 2,
          HasWork : false
        },
        {
          Name : 'C',
          Stars : 2,
          HasWork : false
        },
        {
          Name : 'VB',
          Stars : 2,
          HasWork : false
        }
      ],
    },
    {
      Category : 'アプリ',
      Skills : [
        {
          Name : 'サーバーサイド',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'WINDOWSデスクトップ(EXE)',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'WINDOWSコンソール(EXE)',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'SHAREPOINT FRAMEWORK',
          Stars : 4,
          HasWork : false
        },
        {
          Name : 'WPF',
          Stars : 4,
          HasWork : false
        },
        {
          Name : 'UWP',
          Stars : 4,
          HasWork : false
        },
        {
          Name : 'WEBフロントエンド',
          Stars : 3,
          HasWork : true
        },
        {
          Name : 'IPHONE',
          Stars : 2,
          HasWork : false
        },
        {
          Name : 'ANDROID',
          Stars : 2,
          HasWork : false
        }
      ],
    },
    {
      Category : 'MICROSOFT サーバー/クラウド',
      Skills : [
        {
          Name : 'SHAREPOINT SERVER',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'SHAREPOINT ONLINE',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'MICROSOFT FLOW',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'POWER APPS',
          Stars : 3,
          HasWork : false
        },
        {
          Name : 'POWER BI',
          Stars : 3,
          HasWork : false
        }
      ],
    },
    {
      Category : 'フレームワーク',
      Skills : [
        {
          Name : '.NET CORE/FRAMEWORK',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'REACT',
          Stars : 3,
          HasWork : true
        },
        {
          Name : 'BOOTSTRAP',
          Stars : 3,
          HasWork : false
        },
        {
          Name : 'STRUTS',
          Stars : 3,
          HasWork : false
        },
        {
          Name : 'ANGULARJS',
          Stars : 2,
          HasWork : false
        },
        {
          Name : 'CAKE PHP',
          Stars : 2,
          HasWork : false
        }
      ],
    },
    {
      Category : 'WEBサーバー',
      Skills : [
        {
          Name : 'IIS',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'NODE.JS',
          Stars : 4,
          HasWork : true
        },
        {
          Name : 'APATCHE TOMCAT',
          Stars : 2,
          HasWork : false
        }
      ],
    },
    {
      Category : 'データベース',
      Skills : [
        {
          Name : 'SQL SERVER',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'ORACLE DATABASE',
          Stars : 3,
          HasWork : false
        },
        {
          Name : 'MYSQL',
          Stars : 3,
          HasWork : false
        }
      ],
    },
    {
      Category : 'クラウドプラットフォーム',
      Skills : [
        {
          Name : 'AZURE',
          Stars : 4,
          HasWork : false
        },
        {
          Name : 'AWS',
          Stars : 3,
          HasWork : false
        },
        {
          Name : 'FIREBASE',
          Stars : 3,
          HasWork : true
        },
        {
          Name : 'GCP',
          Stars : 2,
          HasWork : false
        }
      ],
    },
    {
      Category : 'BI製品',
      Skills : [
        {
          Name : 'SQL SERVER REPORTING SERVICES',
          Stars : 5,
          HasWork : false
        },
        {
          Name : 'POWER BI',
          Stars : 3,
          HasWork : false
        },
        {
          Name : 'COGNOS',
          Stars : 2,
          HasWork : false
        }
      ],
    }
];