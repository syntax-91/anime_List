import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loader } from '../components/atoms/loader/loader'
import { _404 } from '../pages/404/404'
import { Anime } from '../pages/anime/anime'
import Home from '../pages/Home/Home'
import { Likes } from '../pages/Home/like/likes'

//lazy loading
const About = React.lazy(() => import('./../pages/AboutUS/About_us'))

const Login = React.lazy(() => import('../pages/auth/login'))

const Settings = React.lazy(() => import('./../pages/Settings/Settings'))

const Custom = React.lazy(() => import('../pages/Settings/custom/custom'))

const Profile = React.lazy(() => import('./../pages/Profile/Profile'))

export function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}>
					<Route path='likes' element={<Likes />} />
				</Route>

				<Route
					path='/about'
					element={
						<Suspense fallback={<Loader />}>
							<About />
						</Suspense>
					}
				/>

				<Route path='*' element={<_404 />} />

				<Route
					path='/login'
					element={
						<Suspense fallback={<Loader />}>
							<Login />
						</Suspense>
					}
				/>

				<Route
					path='/settings'
					element={
						<Suspense fallback={<Loader />}>
							<Settings />
						</Suspense>
					}
				>
					<Route
						path='custom'
						element={
							<Suspense fallback={<Loader />}>
								<Custom />
							</Suspense>
						}
					/>

					<Route
						path='profile'
						element={
							<Suspense fallback={<Loader />}>
								<Profile />
							</Suspense>
						}
					/>
				</Route>

				<Route path='custom' element={<Custom />} />

				<Route path='/anime/:id' element={<Anime />} />
			</Routes>
		</BrowserRouter>
	)
}
