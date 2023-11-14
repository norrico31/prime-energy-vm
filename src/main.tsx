import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			keepPreviousData: true,
			staleTime: 0,
			cacheTime: 0,
			refetchOnWindowFocus: false
		}
	}
})

const { fetch: originalFetch } = window;
window.fetch = async (...[resource, config]: Parameters<typeof originalFetch>): Promise<Response> => {
	const url = resource.toString().toLocaleLowerCase().includes('download')
	resource = appUrl(resource as string, url ? 'DOWNLOAD' : 'CORE')
	const response = await originalFetch(resource, {
		...(config || {}),
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json',
			...(config?.headers || {})
		}
	})

	const data = await response.clone().json()

	if (!(response.status >= 200 && response.status <= 205)) return Promise.reject(data)
	response.json = () => data
	return Promise.resolve(response);
}

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
)

function appUrl(path: string, baseUrl: 'CORE' | 'DOWNLOAD' = 'CORE'): string {
	const APP_VERSION = 'v1'
	const APP_URL: Record<string, string> = {
		'CORE': `https://vms.redcoresolutions.com/passthru/api/${APP_VERSION}`,
		'DOWNLOAD': `https://hrportal.redcoresolutions.com/passthru/api/backend`
	}
	return APP_URL[baseUrl] + path
}