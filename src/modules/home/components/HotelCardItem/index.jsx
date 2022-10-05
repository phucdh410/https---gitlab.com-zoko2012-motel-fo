import React from 'react';

import {
	Box,
	Grid,
	Card,
	CardContent,
	Typography,
	CardActionArea,
	CardMedia,
	Checkbox,
	FormControlLabel,
} from '@mui/material';

import hotel1 from '@assets/images/hotel1.png';
import hotel2 from '@assets/images/hotel2.png';

import './index.scss';

export const HotelCardItem = ({ data, index }) => {
	return (
		<Box>
			<CardActionArea
				sx={{
					backgroundColor: '#f4f4f4',
					'&:hover': { backgroundColor: '#fff' },
				}}
			>
				<Card className="hotel-card-item">
					<Grid container borderRadius="inherit">
						<Grid item xs={5} borderRadius="inherit">
							<CardMedia
								sx={{ borderRadius: 'inherit', objectFit: 'none' }}
								component="img"
								image={index % 2 === 1 ? hotel1 : hotel2}
							/>
						</Grid>
						<Grid item xs={7}>
							<CardContent className="h-full flex flex-col justify-between">
								<Box>
									<Typography className="address" mb={0.5}>
										{'Quận 5, Hồ Chí Minh'}
									</Typography>
									<Typography className="name">{'An Son Building'}</Typography>
								</Box>
								<Typography className="price">
									{'4.500.000'}
									<Typography component="span" className="month">
										&nbsp;/&nbsp;tháng
									</Typography>
								</Typography>

								<Grid
									container
									justifyContent="space-between"
									alignItems="center"
									className="feature-container"
								>
									<Grid item xs={4} textAlign="center">
										<FormControlLabel
											control={<Checkbox disabled defaultChecked />}
											label={'20 tầng'}
										/>
									</Grid>
									<Grid item xs={4} textAlign="center">
										<FormControlLabel
											control={<Checkbox disabled />}
											label={'500 m²'}
										/>
									</Grid>
									<Grid item xs={4} textAlign="center">
										<FormControlLabel
											control={<Checkbox disabled />}
											label={'8/20'}
										/>
									</Grid>
								</Grid>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			</CardActionArea>
		</Box>
	);
};
