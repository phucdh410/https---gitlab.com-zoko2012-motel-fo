import React from 'react';

import { TextareaAutosize } from '@mui/material';

import classNames from 'classnames';

import './index.scss';

export const CTextarea = ({
	id,
	name,
	value,
	placeholder,
	className,
	onChange,
	maxRows,
	minRows,
	...props
}) => {
	return (
		<TextareaAutosize
			id={id}
			name={name}
			className={classNames('c-textarea', className)}
			value={value}
			onChange={onChange}
			minRows={minRows}
			maxRows={maxRows}
			placeholder={placeholder}
			{...props}
		/>
	);
};
