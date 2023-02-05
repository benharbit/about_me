import React, { ReactNode, useState } from 'react';

export interface NavContextProps {
	activeNavLinkId: string;
	setActiveNavLinkId: (id: string) => void;
}

export const NavContext = React.createContext<NavContextProps>({activeNavLinkId:"", setActiveNavLinkId: (str: string) => {}});

const NavProvider = ({ children }: {children: ReactNode}) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};

export default NavProvider;
