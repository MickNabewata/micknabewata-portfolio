import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import { Config } from './utils/configUtil';

/** .envファイル読み込み */
//readEnv();

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

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
