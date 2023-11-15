import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import './index.css'

const { fetch: originalFetch } = window;
window.fetch = async (...[resource, config]: Parameters<typeof originalFetch>): Promise<Response> => {
	const token = localStorage.getItem('token')
	const response = await originalFetch(resource, {
		...(config || {}),
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json',
			...(config?.headers || {}),
			...(token != null ? { 'Authorization': `Bearer ${JSON.parse(token)}` } : {}),
		}
	})

	const data = await response.clone().json()

	if (!(response.status >= 200 && response.status <= 205)) return Promise.reject(data)
	response.json = () => data
	return Promise.resolve(response);
}

createRoot(document.getElementById('root')!).render(
	<App />
)