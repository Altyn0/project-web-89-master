/** @format */

import React, { useState } from 'react';
import UserComponent from '../components/UserComponent';
import HeaderComponent from '../components/HeaderComponent';
import { users } from '../data/users';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
	const [name, setName] = useState('0');
	return (
		<div>
			<p>{name}</p>

		<button onClick={() => setName(Math.floor(Math.random()*100))}>Change name</button>
		</div>
	);
};

export default HomeScreen;
