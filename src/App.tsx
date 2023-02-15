import React from 'react'
import { Nav } from './nav';
import { Main } from './pages';
import NavProvider from './context/NavContext';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReceiveAUTH2Code } from './components/ReceiveAUTH2Code';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  } from '@mui/material/styles';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
	  dashed: true;
	  myOutlined: true;
	  active: true;
	}
  }
const theme = createTheme({
	components: {
	  // Name of the component
	  MuiButton: {
		variants: [
			{
			  props: { variant: "dashed" },
			  style: {
				textTransform: 'none',
				border: `2px dashed `,
				color: 'blue',
			  },
			},
			{
			  props: { variant: 'dashed', color: 'secondary' },
			  style: {
				border: `4px dashed `,
				color: 'red',
			  },
			},
			{
				props: { variant: 'myOutlined' },
				style: {
					m: 0,
					border: `1px solid `,
					color: 'black',
					display: 'inline-block',
					padding:0,
					minHeight: 0,
					minWidth: 0,
				},
			  },
			  {
				props: { variant: 'active' },
				style: {
					marginTop : '0px',
				  border: `1px solid `,
				  color: 'red',
				  borderRadius: '100px'
				},
			  },
		],
		styleOverrides: {
		  // Name of the slot
		  root: {
			// Some CSS
			fontSize: '1rem',
		  },
		},
	  },
	},
  });

function App() {
	return (
		<ThemeProvider theme={theme}>
		<BrowserRouter>
		<Routes>
        <Route element={<ReceiveAUTH2Code/>} path="/callback/" />
		<Route element={
		<div className='appContainer'>
			<NavProvider>
				<Nav/>
				<Main />
			</NavProvider>
		</div>
		} path="/" />
		<Route path='/back1.jpg' element={<div> dkdkdkddk </div>} />
		<Route path='*' element={<div style={{fontSize: 50}}>404: Not found</div>} />
		
		</Routes>
		</BrowserRouter>
		</ThemeProvider>

	);
}

export default App;
