/** ページ */
export type page = {
    /** 相対パス */
    path : string,
    /** 名称 */
    name : string,
    /** 説明 */
    description : string,
    /** キーワード */
    keyWords : string[],
    /** サムネイル画像URL */
    thumbNail : string
}

/** ページ一覧 */
const pages = {
    /** 自己紹介 */
    home : {
        path : '/',
        name : '自己紹介',
        description : 'Office 365を得意とするITエンジニア@MNabewataのポートフォリオサイトです。',
        keyWords : ['ポートフォリオ', 'Office 365', 'SharePoint', 'シェアポイント', 'C#', 'React'],
        thumbNail : '/thumbnails/hello.png'
    } as page,

    /** 技術 */
    skills : {
        path : '/skills',
        name : '技術',
        description : '@MNabewataが今までに習得した技術と習熟度です。',
        keyWords : ['ポートフォリオ', 'Office 365', 'SharePoint', 'シェアポイント', 'C#', 'React', '技術'],
        thumbNail : '/thumbnails/skills.png'
    } as page,

    /** 開発実績 */
    works : {
        path : '/works',
        name : '開発実績',
        description : '@MNabewataが今までに経験した案件の概要です。。',
        keyWords : ['ポートフォリオ', 'Office 365', 'SharePoint', 'シェアポイント', 'C#', 'React', '開発実績'],
        thumbNail : '/thumbnails/works.png'
    } as page
}

export default pages;