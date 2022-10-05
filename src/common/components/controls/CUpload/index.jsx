import React, { useMemo } from 'react';

import { Box } from '@mui/material';
import { CloudUploadOutlined } from '@mui/icons-material';

import { useDropzone } from 'react-dropzone';

import './index.scss';

const focusedStyle = {
	borderColor: '#2196f3',
};

const acceptStyle = {
	borderColor: '#00e676',
};

const rejectStyle = {
	borderColor: '#ff1744',
};

export const CUpload = ({ currentFile, imgUrl, onDrop }) => {
	const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
		useDropzone({
			accept: {
				'image/*': [],
			},
			onDrop: onDrop,
		});

	const style = useMemo(
		() => ({
			...(isFocused ? focusedStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isFocused, isDragAccept, isDragReject],
	);

	return (
		<Box
			component="div"
			{...getRootProps({ className: 'dropzone c-dropzone', style })}
		>
			<input {...getInputProps()} />

			{currentFile || imgUrl ? (
				<div className="preview-image">
					<img src={imgUrl || currentFile.preview} alt="" />
				</div>
			) : (
				<>
					<CloudUploadOutlined sx={{ fontSize: '2.5rem' }} />

					<p className="dropzone-text">
						Upload 29*29 px
						<br />
						maxsize: 40 mg
					</p>
				</>
			)}
		</Box>
	);
};
