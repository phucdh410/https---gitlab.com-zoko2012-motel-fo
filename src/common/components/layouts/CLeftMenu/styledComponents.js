import {
	Drawer,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	styled,
} from '@mui/material';

const leftMenuWidth = 238;

const openedMixin = (theme) => ({
	position: 'initial',
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
	width: leftMenuWidth,
	backgroundColor: theme.palette.color.leftMenuBg,
});

const closedMixin = (theme) => ({
	position: 'initial',
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
	backgroundColor: theme.palette.color.leftMenuBg,
});

export const LeftMenu = styled(Drawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	width: leftMenuWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}));

export const Menu = styled(ListItemButton)(({ theme, open }) => ({
	color: 'white',
	backgroundColor: theme.palette.color.menuItemBg,
	'&.main-menu': {
		minHeight: 48,
		justifyContent: open ? 'initial' : 'center',
		paddingLeft: 20,
		paddingRight: 20,
	},
	'&.sub-menu': {
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		// borderTopLeftRadius: '20px',
		// borderBottomLeftRadius: '20px',
		paddingLeft: '36px',

		'&::before': {
			content: '""',
			position: 'absolute',
			left: 0,
			width: 0,
			height: 0,
			borderTop: '24px solid #172b43',
			borderBottom: '24px solid #172b43',
			borderRight: '16px solid transparent',
		},
	},
	'&:hover': {
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
}));

export const Icon = styled(ListItemIcon)(({ theme, open }) => ({
	color: 'white',
	minWidth: 40,
	'&.main-icon': {
		minWidth: 0,
		marginRight: open ? 24 : 'auto',
		justifyContent: 'center',
	},
}));

export const Text = styled(ListItemText)(({ theme, open }) => ({
	opacity: open ? 1 : 0,
}));
