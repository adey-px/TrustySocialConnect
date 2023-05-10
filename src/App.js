import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase/Firebase';
import { login, logout } from './features/userSlice';
import LeftSidebar from './components/leftsidebar/LeftSidebar';
import ChatSpace from './components/chatspace/ChatSpace';
import UserLogin from './components/userlogin/UserLogin';

//
const App = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	/* allow access after login */
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				/* capture user detail from login */
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<div className='app'>
			{user ? (
				<>
					<LeftSidebar />
					<ChatSpace />
				</>
			) : (
				<UserLogin />
			)}
		</div>
	);
};

export default App;
