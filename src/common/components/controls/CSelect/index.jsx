import React from 'react';

import { MenuItem, Select } from '@mui/material';
import classNames from 'classnames';

import './index.scss';

export const CSelect = ({
	id,
	name,
	value,
	onChange,
	options,
	className,
	...props
}) => {
	return (
		<Select
			id={id}
			name={name}
			value={value}
			onChange={onChange}
			className={classNames('c-select', className)}
			{...props}
		>
			{options?.length &&
				options.map((option, index) => (
					<MenuItem key={option.id + index} value={option.name}>
						{option.name}
					</MenuItem>
				))}
		</Select>
	);
};
