import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import { useOAuth2 } from "@tasoskakour/react-use-oauth2";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//import background1 from './back1.jpg';
import background1 from './4907157.jpg';

require('dotenv').config()
const Home = () => {
	const [emailAddress, setEmailAddress] = React.useState<string>("");
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

	const getEmail = async () => {
		fetch('https://www.googleapis.com/oauth2/v2/userinfo?fields=email')
	};

	if(!emailAddress && sessionStorage.getItem("state")){


	}

	const doGetAuth = async () => {
		console.log(`zzz: ${await getAuth()}`);
		console.log(`data: ${data}`)
	};
	//sessionStorage.setItem("state","") // used for debugging
	const googleState = sessionStorage.getItem("state")

	// TODO send to server to get token

	
	//OAUTHCODE
	function getLogin(){
	return(<Box>

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
				</Box>)

	}
	const techList = [
		'EVM', 
		'Solana', 
		'React', 
		'MUI', 
		'Typescript/Javascript', 
		'OAUTH2', 
		'Nodejs', 
		'Express', 
		'MongoDB', 
		'mySQL', 
		'HardHat',
		'Foundry', 
		'NFTs', 
		'ERC20'
	]

	return (
			<>
			{getLogin()}
			<Box ref={homeRef} 
			id = 'homeContainer'
			sx={{ 
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundImage: `url(${background1})`,
				backgroundSize: 'cover',
				backgroundColor: 'rgba(255, 255, 0, 0.2))',
				height: '100vh',
				width: '100vw',

			}}>
				<Typography variant="h4" sx={{color: 'black', mt: 20}}>
					About Me
				</Typography>
				<Box
					sx={{
						mt: 3,
						height: "20px",
						width: "600px",
					}}>
					<Typography  variant="h5">
					
					I am a full stack developer with a background in trading and derivatives.  I have done many projects involving 
					{techList.map((tech, index) => <><Typography display="inline" variant="h5" color='red'> {tech}</Typography>,</>)}
					 and more.   My github <a href="http://www.github.com/risingsun007"> http://www.github.com/risingsun007</a>.
					Please check out my projects below and contact me if you have any questions.
					</Typography>
				  
				</Box>
			</Box>
			</>
	);
};

export default Home;
