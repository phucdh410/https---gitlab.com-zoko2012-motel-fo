export const ROUTES = {
	ROOT: '/',
	HOME: {
		BASE: '/home',
	},
	USER: {
		BASE: '/user',
	},
	CALENDAR: {
		BASE: '/calendar',
		SUB: {
			POST: 'post',
			SOURCE: 'source',
			UPDATE: 'source/form',
		},
	},
	ACCOUNT: {
		BASE: '/account',
		SUB: {
			DEPARTMENT: 'department',
			PART: 'part',
			POSITION: 'position',
			LIST: 'list',
			CREATE: 'create',
			EDIT: 'edit',
			IMPORT: 'import',
		},
	},
};
