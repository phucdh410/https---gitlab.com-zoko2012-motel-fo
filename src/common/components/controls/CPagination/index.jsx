import React from 'react';

import { Pagination } from '@mui/material';

import { number, func } from 'prop-types';

import './index.scss';

export const CPagination = ({ page, pages, onChange }) => {
	return (
		<Pagination
			className="c-pagination"
			shape="rounded"
			page={1}
			count={5}
			onChange={onChange}
		/>
	);
};

CPagination.propTypes = {
	page: number,
	pages: number,
	onChange: func,
};

CPagination.defaultProps = {
	page: 1,
	pages: 1,
};
