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

function App() {
	const [score, setScore] = useState(0);
	return (
	<div className='container mt-4'>
		<div className='col-8 offset-2'>
			<ScoreComponent score={score}/>
			<div className="row">
				<div className="col">
					<ButtonComponent type='increase' onPress={val => setScore(score + val)}/>
				</div>
				<div className="col">
					<ButtonComponent onPress={val => setScore(score + val)}/>
				</div>
			</div>
		</div>
	</div>
	
	);
}

export default App;
