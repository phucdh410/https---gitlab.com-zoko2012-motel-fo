import { Route } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

export const UserRoute = (
	<Route path={ROUTES.USER.BASE}>
		<Route index element={<div>User</div>} />
	</Route>
);
