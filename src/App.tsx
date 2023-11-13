import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import AuthTokenProvider from './shared/contexts/AuthToken'
import AuthUserProvider from './shared/contexts/AuthUser'


export default function App() {
	// window.document.title = 'Hello World'

	return (
		<>
			<AuthTokenProvider>
				<AuthUserProvider>
					<RouterProvider router={routes} />
				</AuthUserProvider>
			</AuthTokenProvider>
		</>
	)
}
