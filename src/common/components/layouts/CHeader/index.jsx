import React from 'react';
import { Link } from 'react-router-dom';

import {
	Box,
	Button,
	Grid,
	IconButton,
	InputAdornment,
	styled,
	TextField,
} from '@mui/material';

import { Notifications, Search } from '@mui/icons-material';

import './_index.scss';

//#region Styled MUI
const StyledHeader = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.color.headerBg,
	height: 72,
}));

const SearchInput = styled(TextField)(({ theme }) => ({
	width: '60%',
	background: 'rgb(222 222 222 / 50%)',
	border: '0.7px solid #FFFFFF',
	borderRadius: '10px',
	'& .MuiOutlinedInput-input': {
		padding: 0,
		height: 31,
		fontWeight: 500,
		fontSize: 13,
		lineHeight: 15,
		color: 'black',
	},
	'& fieldset': {
		border: 'none!important',
	},
}));
//#endregion

export const CHeader = () => {
	return (
		<StyledHeader className="flex c-header">
			<Box
				className="h-full flex items-center justify-center"
				width={150}
				minWidth={150}
			>
				<Link to="/">
					<Button variant="text" className="!font-semibold">
						Thuê Phòng
					</Button>
				</Link>
			</Box>

			<Grid container columnSpacing={2} alignItems="center">
				<Grid item xs={3} />
				<Grid item xs={6}>
					<SearchInput
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Search color="black" />
								</InputAdornment>
							),
						}}
						placeholder="Tìm kiếm..."
					/>
				</Grid>
				<Grid item xs={3}>
					<Box display="flex" className="justify-end" mr={3}>
						<IconButton color="primary" sx={{ bgcolor: '#EDEDED' }}>
							<Notifications />
						</IconButton>
						<Button sx={{ ml: '16px' }} variant="login">
							Đăng nhập
						</Button>
					</Box>
				</Grid>
			</Grid>
		</StyledHeader>
	);
};
