import QueryUtil from './queryUtil';

it('get - クラッシュしないこと', () => {
    let q = new QueryUtil();
    q.get();
    expect(q.params).toEqual({});
});

it('add - getせずadd', () => {
    let testData = {test : 'aaa'};
    let q = new QueryUtil();
    q.add(testData);
    expect(q.params).toEqual(testData);
});

it('add - getせずadd - {}', () => {
    let testData = {};
    let q = new QueryUtil();
    q.add(testData);
    expect(q.params).toEqual(testData);
});

it('add - 同一キーのみ', () => {
    let testData = {test : 'bbb'};
    let q = new QueryUtil();
    q.params = {test : 'aaa'};
    q.add(testData);
    expect(q.params).toEqual(testData);
});

it('add - 同一キー含む', () => {
    let testData = {test : 'bbb', test2 : 'ccc'};
    let q = new QueryUtil();
    q.params = {test : 'aaa'};
    q.add(testData);
    expect(q.params).toEqual(testData);
});

it('add - 同一キー含まず', () => {
    let testData = {test2 : 'ccc'};
    let q = new QueryUtil();
    q.params = {test : 'aaa'};
    q.add(testData);
    expect(q.params).toEqual({test : 'aaa', test2 : 'ccc'});
});

it('add - 同一キー含む - 値が配列', () => {
    let testData = {test : ['bbb'], test2 : ['ccc']};
    let q = new QueryUtil();
    q.params = {test : ['aaa']};
    q.add(testData);
    expect(q.params).toEqual({test : ['aaa', 'bbb'], test2 : ['ccc']});
});

it('add - paramsがundefined', () => {
    let testData = {test : 'aaa'};
    let q = new QueryUtil();
    q.params = undefined;
    q.add(testData);
    expect(q.params).toEqual(testData);
});

it('add - paramsがnull', () => {
    let testData = {test : 'aaa'};
    let q = new QueryUtil();
    q.params = null;
    q.add(testData);
    expect(q.params).toEqual(testData);
});

it('remove - getせずremove', () => {
    let q = new QueryUtil();
    q.remove('key','value');
    expect(q.params).toEqual({});
});

it('remove - 文字列置換', () => {
    let q = new QueryUtil();
    q.params = { test : 'aaa' };
    q.remove('test','aaa');
    expect(q.params).toEqual({ test : '' });
});

it('remove - 文字列置換 - 複数キー', () => {
    let q = new QueryUtil();
    q.params = { test : 'aAa', test2 : 'bBba' };
    q.remove('test','a');
    expect(q.params).toEqual({ test : 'Aa', test2 : 'bBba' });
});

it('remove - 文字列置換 - 該当なし', () => {
    let q = new QueryUtil();
    q.params = { test : 'aaa' };
    q.remove('test','b');
    expect(q.params).toEqual({ test : 'aaa' });
});

it('remove - 配列', () => {
    let q = new QueryUtil();
    q.params = { test : ['aaa'] };
    q.remove('test', 'aaa');
    expect(q.params).toEqual({ test : [] });
});

it('remove - 配列 - 複数要素', () => {
    let q = new QueryUtil();
    q.params = { test : ['aaa', 'bbb', 'ccc'] };
    q.remove('test', 'bbb');
    expect(q.params).toEqual({ test : ['aaa', 'ccc'] });
});

it('remove - 配列 - 複数該当', () => {
    let q = new QueryUtil();
    q.params = { test : ['aaa', 'bbb', 'ccc', 'bbb'] };
    q.remove('test', 'bbb');
    expect(q.params).toEqual({ test : ['aaa', 'ccc'] });
});

it('remove - 配列 - 該当なし', () => {
    let q = new QueryUtil();
    q.params = { test : ['aaa'] };
    q.remove('test', 'b');
    expect(q.params).toEqual({ test : ['aaa'] });
});

it('remove - 配列 - 要素なし', () => {
    let q = new QueryUtil();
    q.params = { test : ['aaa'] };
    q.remove('test2', 'aaa');
    expect(q.params).toEqual({ test : ['aaa'] });
});

it('toString - getせずtoString', () => {
    let q = new QueryUtil();
    let result = q.toString(['test', 'test2']);
    expect(result).toEqual('?test=&test2=');
});

it('toString - 文字列', () => {
    let q = new QueryUtil();
    q.params = { test : 'aaa' };
    let result = q.toString(['test']);
    expect(result).toEqual('?test=aaa');
});

it('toString - 文字列 - 複数', () => {
    let q = new QueryUtil();
    q.params = { test : 'aaa', test2 : 'bbb' };
    let result = q.toString(['test', 'test2']);
    expect(result).toEqual('?test=aaa&test2=bbb');
});

it('toString - 配列', () => {
    let q = new QueryUtil();
    q.params = { test : ['aaa'] };
    q.delimiter = ',';
    let result = q.toString(['test']);
    expect(result).toEqual('?test=aaa');
});

it('toString - 配列 - 複数', () => {
    let q = new QueryUtil();
    q.params = { test : ['aaa', 'bbb'], test2 : ['ccc'] };
    q.delimiter = '|';
    let result = q.toString(['test', 'test2']);
    expect(result).toEqual('?test=aaa|bbb&test2=ccc');
});

it('toString - 配列 - 複数 - delimiterなし', () => {
    let q = new QueryUtil();
    q.params = { test : ['aaa', 'bbb'], test2 : ['ccc'] };
    let result = q.toString(['test', 'test2']);
    expect(result).toEqual('?test=aaa,bbb&test2=ccc');
});