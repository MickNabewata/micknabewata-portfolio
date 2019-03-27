import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import { Config } from './utils/configUtil';

// Firebase初期化
const fbConfig = {
    apiKey: Config.API_KEY,
    authDomain: Config.AUTH_DOMAIN,
    databaseURL: Config.DATABASE_URL,
    projectId: Config.PROJECT_ID,
    storageBucket: Config.STORAGE_BUCKET,
    messagingSenderId: Config.MESSAGING_SENDER_ID
};
firebase.initializeApp(fbConfig);

ReactDOM.render(<App />, document.querySelector('#root'));

/*
アプリケーションをオフライン状態でよりスムーズに動作させるには、
unregister()メソッドの代わりにregister()メソッドを呼び出します。
この変更によりサービスワーカーが起動するようになるので、
それに伴った落とし穴があることに注意してください。
サービスワーカーについては、以下の日本語サイトが分かりやすいです。
　https://qiita.com/y_fujieda/items/f9e765ac9d89ba241154
詳細については、https://bit.ly/CRA-PWA を参照してください。
*/
serviceWorker.unregister();
