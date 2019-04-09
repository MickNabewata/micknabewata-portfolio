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
    /** GitHub */
    GitHub? : string,
    /** 概要(1要素ずつ改行表示) */
    Overview : string[]
  }

/** 開発実績データ */
export const works : Work[] = [
    {
        ImageUrl : '/Portfolio.jpg',
        Name : 'ポートフォリオサイト構築',
        Skill : ['TYPESCRIPT', 'REACT', 'FIREBASE', 'JAVASCRIPT', 'HTML/CSS', 'WEBフロントエンド', 'NODE.JS'],
        Role : ['メンバー'],
        Members : 1,
        URL : 'http://localhost:3000/',
        GitHub : 'http://localhost:3000/',
        Overview : [
            '当サイトの企画・デザイン・構築を行いました。',
        ]
    }
];