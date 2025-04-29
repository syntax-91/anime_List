import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoutesConfig } from '../config/navConfig'

export function AppRoute(){

	const renderRoutes = (router) => {
		return router.map((r, index_naxui) => (
			<Route
			key={index_naxui}
			path={r.path}
			element={r.element}
			index={r.index}>
				{r.children && renderRoutes(r.children)}
			</Route>
		))
	}

	return (
		<BrowserRouter> 
			<Routes>
					{renderRoutes(RoutesConfig)}
			</Routes>
		</BrowserRouter>
	)
}