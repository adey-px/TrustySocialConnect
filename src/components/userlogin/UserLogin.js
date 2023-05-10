import React from 'react';
import { auth, provider } from '../../firebase/Firebase';
import { Button } from '@mui/material';

import './UserLogin.css';

// Side use login component
const UserLogin = () => {
	// Login handler
	const signIn = () => {
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};

	return (
		<div className='login__Page'>
			<div className='login__Logo'>
				<img
					src='https://www.mcvuk.com/wp-content/uploads/discord-logo.jpg'
					alt='logo'
				/>
			</div>

			<Button onClick={signIn}>Sign In</Button>
		</div>
	);
};

export default UserLogin;
