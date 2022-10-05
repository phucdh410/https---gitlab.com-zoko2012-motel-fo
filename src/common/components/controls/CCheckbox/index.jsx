import React from 'react';

import classNames from 'classnames';

import { Checkbox } from '@mui/material';

import './index.scss';

export const CCheckbox = ({
	id,
	name,
	value,
	onChange,
	disabled,
	className,
	...props
}) => {
	return (
		<Checkbox
			id={id}
			name={name}
			checked={value}
			disabled={disabled}
			className={classNames('c-checkbox', className)}
			{...props}
		/>
	);
};
