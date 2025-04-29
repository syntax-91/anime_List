import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { _404 } from '../pages/404/404'
import { About_us } from '../pages/AboutUS/About_us'
import Login from '../pages/auth/login'
import Home from '../pages/Home/Home'
import { Likes } from '../pages/Home/like/likes'
import { Custom } from '../pages/Settings/cursom/custom'
import { Settings } from '../pages/Settings/Settings'

export function AppRoute(){


	return (
		<BrowserRouter>  
			<Routes>
					<Route path='/' element={<Home />} />
					<Route path='likes' element={<Likes />} />
					<Route path='/about' element={<About_us />} />
					<Route path='*' element={<_404 />} />
					<Route path='/login' element={<Login />} />
					
					<Route path='/settings' element={<Settings />}>
						<Route path='custom' element={<Custom/ >} />
					</Route>
					
			</Routes>
		</BrowserRouter>
	)
}