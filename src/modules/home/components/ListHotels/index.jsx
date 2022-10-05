import { Box, Grid } from '@mui/material';
import { HotelCardItem } from '..';

export const ListHotels = ({ data }) => {
	//#region Data
	//#endregion

	//#region Event
	//#endregion

	//#region Render
	return (
		<Box mt={2}>
			<Grid container spacing={2}>
				{Array(10)
					.fill('')
					.map((hotel, index) => (
						<Grid key={index} item md={6} xl={4}>
							<HotelCardItem data={hotel} index={index} />
						</Grid>
					))}
			</Grid>
		</Box>
	);
	//#endregion
};
