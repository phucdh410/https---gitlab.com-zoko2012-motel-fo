import React, { useState, useEffect, useCallback } from 'react';

import { useLocation } from 'react-router-dom';

import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { ArrowDownward, List, LocationOn } from '@mui/icons-material';

import dayjs from 'dayjs';

import { CPagination } from '@components/controls';

import { NAVIGATIONS } from '@constants';

import apiInstance from '@axios';

import { ListHotels } from '../../components';

import './index.scss';

export const ListsPage = () => {
	//#region Data
	const location = useLocation();
	const { pathname } = location;

	const [date, setDate] = useState(dayjs('2022-10-01'));
	const [paginate, setPaginate] = useState({ page: 1, pages: 0 });
	const [data, setData] = useState([]);

	//#endregion

	//#region Event
	const handleChangePage = (event, value) =>
		setPaginate({ ...paginate, page: value });

	const getData = useCallback(async () => {
		const formatDate = dayjs(date).format('YYYY-MM-DD');
		const res = await apiInstance.get(
			`match/getAllInBO?day=${formatDate}&cols=competition_name&q=English&sBy=_id&sType=ASC&limit=12&page=${paginate.page}`,
		);

		if (res?.status === 200) {
			setData(res.data.data);
			setPaginate({ ...paginate, pages: res.data.nPages });
		}
		if (res?.status === 204) {
			setData([]);
		}
	}, [date, paginate.page]);

	const handleChangeDate = (value) => setDate(value);
	//#endregion

	useEffect(() => {
		getData();
	}, [getData]);

	//#region Render
	return (
		<Box className="lists-page">
			<Grid
				container
				justifyContent="space-between"
				alignItems="center"
				className="filter-view"
			>
				<Grid item>
					<Typography variant="normal-text">
						Xếp theo:&nbsp;
						<Typography component="span" fontSize={16}>
							<Button
								variant="text"
								endIcon={<ArrowDownward />}
								className="price-view"
							>
								Giá
							</Button>
						</Typography>
					</Typography>
				</Grid>
				<Grid item>
					<Box className="type-of-view">
						<IconButton variant="type-of-view">
							<LocationOn />
						</IconButton>
						<IconButton variant="type-of-view" className="selected">
							<List />
						</IconButton>
					</Box>
				</Grid>
			</Grid>

			<ListHotels data={[]} />

			<Box mt={2}>
				<CPagination
					page={paginate.page}
					pages={paginate.pages}
					onChange={handleChangePage}
				/>
			</Box>
		</Box>
	);
	//#endregion
};
