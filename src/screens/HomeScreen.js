/** @format */

import React, { useState } from 'react';
import UserComponent from '../components/UserComponent';
import HeaderComponent from '../components/HeaderComponent';
import { users } from '../data/users';
import CardComponent from '../components/CardComponent';
import { clear } from '@testing-library/user-event/dist/clear';

const HomeScreen = () => {

	const [likeState, setLikeState] = useState(''); 
	const [color, setColor] = useState('#00random');
	const [username, setUsername] = useState();


	return (

		<div>
			<p>{username}</p>
			<input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
			<button onClick={()=>alert(username)} >Show username</button>
			<button onClick={()=>setUsername('')}>Clear</button>
	
		<div style={{
			padding:20,
		}} >
			
			<h1 style={{
				color,
			}}>{likeState}</h1>

			
		<button onClick={() => {
			setLikeState('Liked')
			setColor('blue')
			}}>Like</button>
			<button onClick={() => {
				setLikeState('Dislike')
				setColor('red') }}>DisLike</button>
		</div>
		</div>
	);
};

export default HomeScreen;
