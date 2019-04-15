import merge from 'lodash.merge';

export default class QueryUtil {

    /** URLパラメータ */
    params : any = {};

    /** URLパラメータを取得 */
    get(delimiter? : string) : QueryUtil {
        this.params = {};

        //URLパラメータを文字列で取得(?含む)
        let urlParamStr = window.location.search;

        if (urlParamStr) {
            //?を除去
            urlParamStr = urlParamStr.substring(1);

            //urlパラメータをオブジェクトにまとめる
            urlParamStr.split('&').forEach( param => {
                let temp = param.split('=');
                temp[1] = decodeURIComponent(temp[1]).toUpperCase();

                //pramsオブジェクトにパラメータを追加
                this.params = {
                    ...this.params,
                    [temp[0]]: (delimiter)? temp[1].split(delimiter) : temp[1]
                };
            })
        }

        // 自身のインスタンスを返却
        return this;
    }

    /** URLパラメータに値を追加 */
    add(params : {}) : QueryUtil {

        if(params)
        {
            if(!this.params) this.params = {};
            merge(this.params, params);
        }

        /** 自身のインスタンスを返却 */
        return this;
    }

    /** URLパラメータから値を削除 */
    remove(key : string, value : string) : QueryUtil {

        if(key && key.length > 0 && value && value.length > 0) {
            let p : string[] = this.params[key];
            if(p)
            {
                this.params = p.filter(n => n != value);
            }
        }

        // 自身のインスタンスを返却
        return this;
    }
}