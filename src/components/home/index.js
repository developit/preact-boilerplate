import { h } from 'preact';
import style from './style.less';
import Table from 'antd/lib/table/Table';

const dataSource = [{
	key: '1',
	name: 'Mike',
	age: 32,
	address: '10 Downing Street'
  }, {
	key: '2',
	name: 'John',
	age: 42,
	address: '10 Downing Street'
  }];
  
  const columns = [{
	title: 'Name',
	dataIndex: 'name',
	key: 'name',
  }, {
	title: 'Age',
	dataIndex: 'age',
	key: 'age',
  }, {
	title: 'Address',
	dataIndex: 'address',
	key: 'address',
  }];
  
  

export default () => {
	return (
		<div class={style.home}>
			<h1>Home</h1>
			<p>This is the Home component.</p>
			<Table dataSource={dataSource} columns={columns} />
		</div>
	);
};
