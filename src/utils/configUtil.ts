/** 環境変数取得ユーティリティ */
export class Config
{
    /** 実行モード */
    public static get NODE_ENV() : string { return process.env.NODE_ENV; }

    /** firebase apiKey */
    public static get API_KEY() { return process.env.REACT_APP_API_KEY }

    /** firebase authDomain */
    public static get AUTH_DOMAIN()  { return process.env.REACT_APP_AUTH_DOMAIN }

    /** firebase databaseURL */
    public static get DATABASE_URL()  { return process.env.REACT_APP_DATABASE_URL }

    /** firebase projectId */
    public static get PROJECT_ID() { return process.env.REACT_APP_PROJECT_ID }

    /** firebase storageBucket */
    public static get STORAGE_BUCKET() { return process.env.REACT_APP_STORAGE_BUCKET }

    /** firebase messagingSenderId */
    public static get MESSAGING_SENDER_ID() { return process.env.REACT_APP_MESSAGING_SENDER_ID }
}