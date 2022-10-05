import { createContext } from 'react';

export const MenuContext = createContext({
	menuOpen: true,
	setMenuOpen: () => {},
});
