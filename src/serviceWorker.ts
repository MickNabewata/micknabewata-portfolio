/*
このファイルには、ブラウザのサービスワーカーを利用するためのコード郡が記載されています。
  register()    : サービスワーカーを起動します。
  unregister()  : サービスワーカーを終了します。

サービスワーカーを起動すると、アプリケーションは2度目以降のリクエストにより速く応答することができます。
また、オフライン状態でもキャッシュを利用して動作することができます。
但し、このキャッシュはブラウザのすべてタブを閉じるまで保持されるため、
ブラウザを再起動するまでアプリケーションの更新がブラウザに反映されないことに注意してください。

サービスワーカーについては、以下の日本語サイトが分かりやすいです。
　https://qiita.com/y_fujieda/items/f9e765ac9d89ba241154
詳細については、https://bit.ly/CRA-PWA を参照してください。
*/

/** アプリケーションがローカルホストで起動しているか否か */
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] はIPv6ローカルアドレス
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 はIPv4ローカルアドレス
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

/** コールバック引数の型定義 */
type Config = {
  /** 成功時 */
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  /** 更新時 */
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

/** サービスワーカー起動
 * @param config - コールバック
 */
export function register(config?: Config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // サービスワーカーをサポートするブラウザで有効なURL
    const publicUrl = new URL(
      (process as { env: { [key: string]: string } }).env.PUBLIC_URL,
      window.location.href
    );

    // オリジンの異なる場所で動作しているサービスワーカーでは動作しない
    // (CDNからJavaScriptコードを提供している場合など)
    // 　参考：https://github.com/facebook/create-react-app/issues/2374
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        /* ローカルホスト環境 */

        // サービスワーカー死活チェック & 起動
        checkValidServiceWorker(swUrl, config);

        // ログ追加
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'このアプリケーションはサービスワーカーによるキャッシュを利用しています。詳細は https://bit.ly/CRA-PWA を参照してください。'
          );
        });
      } else {
        /* ローカルホスト以外の環境 */
        
        // サービスワーカー起動
        registerValidSW(swUrl, config);
      }
    });
  }
}

/** サービスワーカー起動 */
function registerValidSW(swUrl: string, config?: Config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log(
                '新しいコンテンツが利用可能になりました。' +
                'コンテンツはブラウザを再起動した後に有効になります。https://bit.ly/CRA-PWA.'
              );

              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log('コンテンツはオフライン利用のためにキャッシュされました。');

              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('サービスワーカー起動時にエラーが発生しました。', error);
    });
}

/** サービスワーカーの死活監視を行い、利用可能になるまでページをリロードしながら待機 */
function checkValidServiceWorker(swUrl: string, config?: Config) {
  fetch(swUrl)
    .then(response => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'インターネット接続がありません。アプリケーションはオフラインモードで起動します。'
      );
    });
}

/** サービスワーカー終了 */
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
