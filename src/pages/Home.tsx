import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import { useOAuth2 } from "@tasoskakour/react-use-oauth2";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
require('dotenv').config()
const Home = () => {
	const homeRef = useNav('Home');
	const { data, loading, error, getAuth } = useOAuth2({
		authorizeUrl: process.env.REACT_APP_AUTHORIZE_URL || "",
		clientId: process.env.REACT_APP_CLIENT_ID || "",
		redirectUri: process.env.REACT_APP_REDIRECT_URL || "",
		scope: process.env.REACT_APP_SCOPE || "",
		responseType: "code",
		exchangeCodeForTokenServerURL: "localhost:3001",
		exchangeCodeForTokenMethod: "POST",
		onSuccess: (payload) => console.log("Success", payload),
		onError: (error_) => console.log("Error", error_)
	});

	if (error) {
		return <div>Error</div>;
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	const doGetAuth = async () => {
		console.log(`zzz: ${await getAuth()}`);
		console.log(`data: ${data}`)
	};
	// sessionStorage.setItem("state","") // used for debugging
	const googleState = sessionStorage.getItem("state")

	// TODO send to server to get token

	return (
		<section ref={homeRef} id='homeContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/> <Box sx={{
				display: 'flex',
				flexDirection: 'column',
			}}>

				<Box
					sx={{
						height: "20px",
						width: "400px",
						m: 10
					}}>
					The following is a demonstation which utilizes the use of OAuth2 and MUI material design to create a login page.
				</Box>
				<Box sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					bgcolor: 'background.paper',
					overflow: 'hidden',
					borderRadius: '12px',
					boxShadow: 1,
					fontWeight: 'bold',
					m: 2,
				}}>
					<Box>
						<p>Login Using Your Google Account</p>
					</Box>
					<Box>{googleState ?
						<p>Logged In {googleState}</p>
						:
						<Button sx={{
							width: '10rem',
							background: 'rgb(0, 0, 0, 0.2)',
							borderRadius: '50px',
							fontWeight: 'bold'
						}}
							variant="contained"
							onClick={doGetAuth}>
							Google Login
						</Button>
					}
					</Box>
				</Box>
			</Box>
		</section>

	);
};

export default Home;
