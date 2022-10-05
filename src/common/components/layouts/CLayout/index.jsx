import React from 'react';

import { Outlet } from 'react-router-dom';

import { any } from 'prop-types';

import { Box, Divider } from '@mui/material';

import { CHeader, CLeftMenu } from '..';

import './_index.scss';

export const CLayout = () => {
	return (
		<Box className="c-layout">
			<CHeader />
			<Divider sx={{ backgroundColor: '#fbf8f8' }} />

			<Box display="flex" sx={{ minHeight: 'calc(100vh - 72px)' }}>
				<CLeftMenu />

				<Box className="right-wrapper">
					<Outlet />
				</Box>
			</Box>
		</Box>
	);
};

CLayout.propTypes = {
	children: any,
};
