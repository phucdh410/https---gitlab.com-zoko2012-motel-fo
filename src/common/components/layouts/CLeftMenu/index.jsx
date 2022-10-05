import { useContext, useState } from 'react';

import { Collapse, List, ListItem, ListItemText } from '@mui/material';

import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { MenuContext } from '@contexts';

import { NAVIGATIONS } from '@constants';

import { LeftMenu, Menu, Icon, Text } from './styledComponents';
import { Link } from 'react-router-dom';

export const CLeftMenu = () => {
	//#region Data
	const { menuOpen } = useContext(MenuContext);

	const [navigations, setNavigations] = useState(NAVIGATIONS);
	//#endregion

	//#region Event
	const handleClickMenu = (index, currentState) => () => {
		const updatedNavigations = [...navigations];
		updatedNavigations[index].in = !currentState;
		setNavigations(updatedNavigations);
	};
	//#endregion

	return (
		<LeftMenu variant="permanent" open={menuOpen} className="left-menu">
			<div>Filter</div>
		</LeftMenu>
	);
};
