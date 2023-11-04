/** @format */

import { Home } from 'iconsax-react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AddTask from './components/AddTask';

function App() {
	return (
	<div className='container mt-4'>
		<div className='col-8 offset-2'>
			<AddTask/>
		</div>
	</div>
	
	);
}

export default App;
