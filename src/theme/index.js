import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		color: {
			headerBg: '#ffffff',
			leftMenuBg: '#ffffff',
			menuItemBg: '#213F63',
		},
		white: {
			main: '#fff',
			contrastText: '#333',
		},
		black: {
			main: '#333',
			contrastText: '#fff',
		},
		primary: {
			main: '#0A1D50',
			contrastText: '#fff',
		},
	},
	typography: {
		fontFamily: "'Montserrat', sans-serif",
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'login' },
					style: {
						fontWeight: 600,
						fontSize: '16px',
						lineHeight: '20px',
						color: 'white',
						background: '#3C6BE2',
						borderRadius: '10px',
						textTransform: 'none',
						padding: '6px 18px',
						'&:hover': {
							color: 'white',
							background: '#3C6BE2',
						},
					},
				},
				{
					props: { variant: 'edit' },
					style: {
						textTransform: 'uppercase',
						background: '#F2BE19',
						borderRadius: '5px',
						color: 'white',
						fontWeight: 600,
						padding: '4px 8px',
						fontSize: '0.6rem',
						'&:hover': {
							background: '#F2BE19',
							opacity: 0.8,
						},
					},
				},
				{
					props: { variant: 'delete' },
					style: {
						textTransform: 'uppercase',
						background: '#BC3556',
						borderRadius: '5px',
						color: 'white',
						fontWeight: 600,
						padding: '4px 8px',
						fontSize: '0.6rem',
						'&:hover': {
							background: '#BC3556',
							opacity: 0.8,
						},
					},
				},
				{
					props: { variant: 'add' },
					style: {
						textTransform: 'uppercase',
						background: '#35BC53',
						borderRadius: '5px',
						color: 'white',
						fontWeight: 600,
						padding: '4px 8px',
						fontSize: '0.6rem',
						'&:hover': {
							background: '#35BC53',
							opacity: 0.8,
						},
					},
				},
			],
			styleOverrides: {
				root: {
					textTransform: 'capitalize',
					minWidth: 40,
				},
			},
		},
		MuiTypography: {
			variants: [
				{
					props: { variant: 'page-title' },
					style: {
						fontWeight: 600,
						fontSize: '15px',
						lineHeight: '18px',
						color: '#000000',
					},
				},
				{
					props: { variant: 'filter-label' },
					style: {
						fontWeight: 600,
						fontSize: '16px',
						lineHeight: '20px',
						letterSpacing: '0.05em',
						color: '#0A1D50',
					},
				},
				{
					props: { variant: 'normal-text' },
					style: {
						fontWeight: 400,
						fontSize: '16px',
						lineHeight: '150%',
						color: '#4D4D4D',
					},
				},
			],
		},
		MuiTableCell: {
			defaultProps: {
				align: 'center',
			},
		},
		MuiPagination: {
			styleOverrides: {
				ul: {
					justifyContent: 'center',
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'& .MuiSvgIcon-root': {
						// color: 'black',
					},
				},
			},
		},
		MuiIconButton: {
			variants: [
				{
					props: { variant: 'type-of-view' },
					style: {
						borderRadius: 0,
						backgroundColor: 'white',
						color: '#0A1D50',
						'&.selected': {
							backgroundColor: '#0A1D50',
							color: 'white',
						},
					},
				},
			],
		},
	},
});

export default theme;
