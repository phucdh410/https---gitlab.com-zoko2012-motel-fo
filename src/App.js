import 'src/styles/_base.scss';

import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers';

import { CLayout } from '@components/layouts';

import { HomeRoute } from '@routes';

import { MenuContext } from '@contexts';

import { ROUTES } from '@constants';

import theme from '@theme';

function App() {
	const [menuOpen, setMenuOpen] = useState(true);

	return (
		<MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ThemeProvider theme={theme}>
					<div className="_app">
						<Router>
							<Routes>
								<Route path={ROUTES.ROOT} element={<CLayout />}>
									{HomeRoute}
								</Route>
							</Routes>
						</Router>
					</div>
				</ThemeProvider>
			</LocalizationProvider>
		</MenuContext.Provider>
	);
}

export default App;
