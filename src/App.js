/** @format */

import { Home } from 'iconsax-react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AddTask from './components/AddTask';
import TasksComponent from './components/TasksComponent';
import { useState } from 'react';

function App() {
	const [tasks, setTasks] = useState([
		{
			id:1,
			title:'Task 1'
		},
		{
			id:1,
			title:'Task 1'
		}, {
			id:1,
			title:'Task 1'
		}, {
			id:1,
			title:'Task 1'
		}, {
			id:1,
			title:'Task 1'
		}, {
			id:1,
			title:'Task 1'
		}, {
			id:1,
			title:'Task 1'
		},
	]);
	return (
	<div className='container mt-4'>
		<div className='col-8 offset-2'>
			<AddTask onAddTask ={val => setTasks([...tasks,val])} />
			<TasksComponent tasks={tasks}/>
		</div>
	</div>
	
	);
}

export default App;
