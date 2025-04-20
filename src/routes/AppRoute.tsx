import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { _404 } from '../pages/404/404'
import { About_us } from '../pages/AboutUS/About_us'
import { Anime } from '../pages/anime/anime'
import Home from '../pages/Home/Home'
import { Likes } from '../pages/Home/like/likes'
import { Custom } from '../pages/Settings/cursom/custom'
import { Settings } from '../pages/Settings/Settings'

export function AppRoute(){

	return (
		<BrowserRouter> 
			<Routes>
					<Route path='/' element={<Home />} >
						<Route path='like' element={<Likes />} />
					</Route>

					<Route path='About' element={<About_us />} />
					
					<Route path='Settings' element={<Settings />} >
							
							<Route index
							 element={
							 <p className='text-center'>Выберите котегорию</p>}/>

							 <Route path='custom' element={<Custom />} />
					</Route>

					<Route path='*' element={<_404 />} />
					<Route path='/anime/:id' element={<Anime />} />
			</Routes>
		</BrowserRouter>
	)
}