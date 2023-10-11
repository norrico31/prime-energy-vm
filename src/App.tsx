import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { Notification } from './shared/contexts/index'


export default function App() {
	localStorage.setItem('token', JSON.stringify("1883|heZ3CDL5H16ptVawLSE2726VZE410HGFhfQcC42t"))
	// window.document.title = 'Hello World'
	return (
		<>
			<Notification>
				<RouterProvider router={routes} />
			</Notification>
		</>
	)
}
