export interface DataItem {
    key: string;
    name: string;
    age: number;
    address: string;
}


export const dataSource: DataItem[] = [{
    key: '1',
    name: '胡彦斌',
    age: 21,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 22,
    address: '西湖区湖底公园1号'
}, {
    key: '3',
    name: 'z周星驰',
    age: 23,
    address: '西湖区湖底公园1号'
}, {
    key: '4',
    name: '刘德华',
    age: 24,
    address: '西湖区湖底公园1号'
}, {
    key: '5',
    name: '古天乐',
    age: 25,
    address: '西湖区湖底公园1号'
}, {
    key: '6',
    name: '刘青云',
    age: 26,
    address: '西湖区湖底公园1号'
}, {
    key: '7',
    name: '余文乐',
    age: 27,
    address: '西湖区湖底公园1号'
}, {
    key: '8',
    name: '张柏芝',
    age: 25,
    address: '西湖区湖底公园1号'
}, {
    key: '9',
    name: '叶倩文',
    age: 26,
    address: '西湖区湖底公园1号'
}, {
    key: '10',
    name: '王祖贤',
    age: 27,
    address: '西湖区湖底公园1号'
}, {
    key: '11',
    name: '林青霞',
    age: 28,
    address: '西湖区湖底公园1号'
}];

export const columns = [{
    title: '编号',
    dataIndex: 'id',
    key: 'id',
},{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];