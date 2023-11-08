/** @format */
import './App.css';
import { List } from 'antd';
import { posts } from './data/posts';

function App() {
	return (
	<div className='container mt-4'>
		<div className='row'>      
			<div className='col-8 offset-2'>
			<List 
			 dataSource={posts}
			 renderItem={(item, _index) => (<List.Item key={item.id}>
				<List.Item.Meta title={item.title} description={item.body} />  
				</List.Item>
				)}  
			/>
			</div>
		</div>
	</div>
	);
}

export default App;
