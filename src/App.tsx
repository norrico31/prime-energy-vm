import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import AuthUserProvider from './shared/contexts/AuthUser'


export default function App() {
	// window.document.title = 'Hello World'

	return (
		<>
			<AuthUserProvider>
				<RouterProvider router={routes} />
			</AuthUserProvider>
		</>
	)
}
