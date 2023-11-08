/** @format */

import { Home } from 'iconsax-react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AddTask from './components/AddTask';
import TasksComponent from './components/TasksComponent';
import { useState } from 'react';
import ScoreComponent from './components/ScoreComponent';
import { ButtonComponent } from './components/ButtonComponent';
import { users } from './data/users';
import ListUserItem from './components/ListUserItem';

function App() {
	const usersWithCompany = users.filter((element) => element.company)
	const handleCheckEmail = (id) => {
		const user = users.find(element => element.id===id);
		user &&	alert(user.email);
		
	};
	return (
	<div className='container mt-4'>
		<div className='col-8 offset-2'>
			{usersWithCompany.map((item,index) =>  (<ListUserItem onCheckEmail={() => handleCheckEmail(item.id)} user={item} color={index % 2 ? 'coral':'green'} />  ))}
		</div>
	</div>
	
	);
}

export default App;
