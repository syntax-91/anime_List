//navigations config
import { _404 } from '../pages/404/404'
import { About_us } from '../pages/AboutUS/About_us'
import Login from '../pages/auth/login'
import Home from '../pages/Home/Home'
import { Likes } from '../pages/Home/like/likes'
import { Settings } from '../pages/Settings/Settings'

	export const RoutesConfig = [
	{ path: '/', element: <Home />,
		children: [
			{ path: 'likes', element: <Likes />}
		]
	},
	{ path: '/about', element: <About_us />},
	{ path: '*', element: <_404 />},
	{ path: '/login', element: <Login />},
	
	{ path: '/settings', element: <Settings />,
		children: [
			{index: true, element: <div>Hi</div>},
			{path: 'custom', element: <div>Custom</div>}
		]
	},
]