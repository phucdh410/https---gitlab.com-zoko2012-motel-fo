import { Route } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

import { ListsPage } from '@modules/home';

export const HomeRoute = (
	<Route path={ROUTES.ROOT}>
		<Route index element={<ListsPage />} />
	</Route>
);
