import { Route } from 'react-router-dom';

import { ROUTES } from '@constants/routes';

import { Posts, Source, Update } from '@modules/calendar';

export const CalendarRoute = (
	<Route path={ROUTES.CALENDAR.BASE}>
		<Route path={ROUTES.CALENDAR.SUB.POST} element={<Source />} />

		<Route path={ROUTES.CALENDAR.SUB.SOURCE} element={<Posts />} />

		<Route path={`${ROUTES.CALENDAR.SUB.UPDATE}/:id`} element={<Update />} />
	</Route>
);
