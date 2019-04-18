import * as deepmerge from 'deepmerge'

/** URLパラメータ操作ユーティリティ */
export default class QueryUtil {

    /** URLパラメータ */
    params : any = {};

    /** 区切り文字 */
    delimiter : string | undefined = undefined;

    /** URLパラメータを取得 */
    get(delimiter? : string) : QueryUtil {
        this.params = {};
        this.delimiter = delimiter;

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
                    [temp[0]]: (this.delimiter)? temp[1].split(this.delimiter) : temp[1]
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
            this.params = deepmerge.all([this.params, params]);
        }

        /** 自身のインスタンスを返却 */
        return this;
    }

    /** URLパラメータから値を削除 */
    remove(key : string, value : string) : QueryUtil {

        if(key && key.length > 0 && value && value.length > 0 && this.params[key]) {
            if(Array.isArray(this.params[key]))
            {
                let p : string[] = this.params[key];
                if(p)
                {
                    this.params[key] = p.filter(n => n != value);
                }
            }
            else
            {
                let p : string = this.params[key];
                if(p)
                {
                    this.params[key] = p.replace(value, '');
                }
            }
        }

        // 自身のインスタンスを返却
        return this;
    }

    /** URLパラメータを文字列化 */
    toString(keys : string[]) : string {
        let ret : string = '';

        if(keys) {
            let temp : string[] = [];
            keys.forEach((key)=> {
                let val = this.params[key];
                if(val && val.length > 0)
                {
                    temp.push(`${key}=${(Array.isArray(val)? Array.from(new Set(val)).join(this.delimiter) : val)}`);
                }
            });
            ret = temp.join('&');
        }

        return (ret.length > 0)? `?${ret}` : '';
    }
}