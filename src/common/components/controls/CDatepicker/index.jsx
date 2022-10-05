import React from 'react';

import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';

import { string, any, func } from 'prop-types';

import './index.scss';
import classNames from 'classnames';

export const CDatepicker = ({
	className,
	id,
	name,
	value,
	onChange,
	...props
}) => {
	return (
		<DatePicker
			id={id}
			name={name}
			value={value}
			onChange={onChange}
			className={classNames('c-datepicker', className)}
			components={{ OpenPickerIcon: CalendarMonth }}
			inputFormat="DD-MM-YYYY"
			renderInput={(params) => <TextField {...params} />}
			{...props}
		/>
	);
};

CDatepicker.propTypes = {
	className: string,
	id: any,
	name: string,
	value: any,
	onChange: func,
};
