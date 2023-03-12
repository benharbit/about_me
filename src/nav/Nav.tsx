import React, {useEffect} from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import  useOAuth2  from "../components/UseOauth2";

import './Nav.css';


const Nav = () => {
  const { data, loading, error, getAuth } = useOAuth2({
		authorizeUrl: process.env.REACT_APP_AUTHORIZE_URL || "",
		clientId: process.env.REACT_APP_CLIENT_ID || "",
		redirectUri: process.env.REACT_APP_REDIRECT_URL || "",
		scope: process.env.REACT_APP_SCOPE || "",
		responseType: "code",
		exchangeCodeForTokenServerURL: process.env.REACT_APP_REDIRECT_URL || "",
		exchangeCodeForTokenMethod: "POST",
		onSuccess: (payload) => console.log("Success", payload),
		onError: (error_) => console.log("Error", error_)
	});

  const oauth2Login = async () => {
    console.log("oauth2Login")
    console.log(`data: ${data}`)
    await getAuth();
  }
  
  console.log(`data: ${data}`)

	return (
    <>
		<nav>
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
      <button className={data ? "nav_login noHover" : "nav_login"} onClick={oauth2Login}> {!data ?  "Google OAUTH2 Login": "Logged In"}</button>  
		</nav>
    </>
	);
};

export default Nav;
