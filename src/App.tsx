import React from 'react'
import { Nav } from './nav';
import { Main } from './pages';
import NavProvider from './context/NavContext';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReceiveAUTH2Code } from './components/ReceiveAUTH2Code';
function App() {
	return (
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
		</Routes>
		</BrowserRouter>

	);
}

export default App;
