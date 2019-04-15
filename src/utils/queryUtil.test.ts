import QueryUtil from './queryUtil';

it('get - クラッシュしないこと', () => {
    let q = new QueryUtil();
    q.get();
    expect(q.params).toEqual({});
});

it('set - getせずadd', () => {
    let testData = {test : 'aaa'};
    let q = new QueryUtil();
    q.add(testData);
    expect(q.params).toEqual(testData);
});

it('set - getせずadd - {}', () => {
    let testData = {};
    let q = new QueryUtil();
    q.add(testData);
    expect(q.params).toEqual(testData);
});

it('set - 同一キーのみ', () => {
    let testData = {test : 'bbb'};
    let q = new QueryUtil();
    q.params = {test : 'aaa'};
    q.add(testData);
    expect(q.params).toEqual(testData);
});

it('set - 同一キー含む', () => {
    let testData = {test : 'bbb', test2 : 'ccc'};
    let q = new QueryUtil();
    q.params = {test : 'aaa'};
    q.add(testData);
    expect(q.params).toEqual(testData);
});

it('set - 同一キー含まず', () => {
    let testData = {test2 : 'ccc'};
    let q = new QueryUtil();
    q.params = {test : 'aaa'};
    q.add(testData);
    expect(q.params).toEqual({test : 'aaa', test2 : 'ccc'});
});

it('set - 同一キー含む - 値が配列', () => {
    let testData = {test : ['bbb'], test2 : ['ccc']};
    let q = new QueryUtil();
    q.params = {test : ['aaa']};
    q.add(testData);
    expect(q.params).toEqual({test : ['aaa', 'bbb'], test2 : ['ccc']});
});

it('set - paramsがundefined', () => {
    let testData = {test : 'aaa'};
    let q = new QueryUtil();
    q.params = undefined;
    q.add(testData);
    expect(q.params).toEqual(testData);
});

it('set - paramsがnull', () => {
    let testData = {test : 'aaa'};
    let q = new QueryUtil();
    q.params = null;
    q.add(testData);
    expect(q.params).toEqual(testData);
});