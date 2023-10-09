import { Suspense as ReactSuspense, lazy, ReactNode } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { Layout } from "./components"

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Pipelines = lazy(() => import('./pages/Pipelines'))

function Suspense({ children }: { children: ReactNode }) {
    return <ReactSuspense fallback={<Spinner animation='grow' />}>
        {children}
    </ReactSuspense>
}


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'dashboard',
                element: <Navigate to='/' />
            },
            {
                path: '/',
                element: <Suspense><Dashboard /></Suspense>
            },
            {
                path: '/pipelines',
                element: <Suspense><Pipelines /></Suspense>
            },
        ]
    },
])