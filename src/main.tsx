import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient()

const { fetch: originalFetch } = window;
window.fetch = async (...args: Parameters<typeof originalFetch>) => {
	const [resource, config] = args

	const response = await originalFetch(resource, {
		headers: {
			'Content-type': 'application/json',
			'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')!)}`,
			...config?.headers
		}
	})

	const data = async () => await response.clone().json()

	if (!(response.status >= 200 && response.status <= 205)) return Promise.reject(response)

	response.json = data
	return Promise.resolve(response);
}

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
)