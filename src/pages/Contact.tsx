import { Gradient } from '@mui/icons-material';
import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const myStyle = {
	background: "linear-gradient(#e66465, #9198e5);"

}

const Contact = () => {
	const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactContainer' style={{background: "linear-gradient(45deg, #9BEBE0, #63767C)"}}>
			<div>
				<h3>CONTACT</h3>
				<h2>
				<a href="mailto: benharbit@gmail.com">Email me.</a>
				</h2>
			</div>
		</section>
	);
};

export default Contact;
