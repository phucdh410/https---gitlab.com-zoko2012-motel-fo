import axios from 'axios';

import { BASE_URL, FORM_HEADER_JSON, TIMEOUT, API_VERSION } from './config';

const apiInstance = axios.create({
	baseURL: `${BASE_URL}/v${API_VERSION}`,
	headers: { ...FORM_HEADER_JSON },
	timeout: TIMEOUT,
});

apiInstance.interceptors.request.use(
	(config) => config,
	(error) => Promise.reject(error),
);

apiInstance.interceptors.response.use(
	(response) => {
		return { ...response.data, status: response.status };
	},
	(error) => {
		return Promise.reject({
			...error.response.data,
			status: error.response.status,
		});
	},
);

export default apiInstance;
