import React from 'react';

import { TextField } from '@mui/material';

import classNames from 'classnames';

import { any, string, bool, func } from 'prop-types';

import './index.scss';

export const CInput = ({
	id,
	name,
	className,
	value,
	onChange,
	placeholder,
	disabled,
	...props
}) => {
	return (
		<TextField
			id={id}
			name={name}
			className={classNames('c-input', className)}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			disabled={disabled}
			{...props}
		/>
	);
};

CInput.propTypes = {
	id: any,
	name: string,
	className: string,
	value: any,
	onChange: func,
	placeholder: string,
	disabled: bool,
};
