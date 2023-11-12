import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import AuthTokenProvider from './shared/contexts/AuthToken'


export default function App() {
	// window.document.title = 'Hello World'

	return (
		<>
			<AuthTokenProvider>
				<RouterProvider router={routes} />
			</AuthTokenProvider>
		</>
	)
}
