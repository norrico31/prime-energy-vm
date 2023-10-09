import { Suspense as ReactSuspense, lazy, ReactNode } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { Layout } from "./components"

const Dashboard = lazy(() => import('./pages/Dashboard'))
const PrintReport = lazy(() => import('./pages/PrintReport'))
const Swp = lazy(() => import('./pages/Swp'))
const Ogp = lazy(() => import('./pages/Ogp'))
const Vulnerabilities = lazy(() => import('./pages/Vulnerabilities'))
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
                path: '/print-report',
                element: <Suspense><PrintReport /></Suspense>
            },
            {
                path: '/swp',
                element: <Suspense><Swp /></Suspense>
            },
            {
                path: '/ogp',
                element: <Suspense><Ogp /></Suspense>
            },
            {
                path: '/pipelines',
                element: <Suspense><Pipelines /></Suspense>
            },
            {
                path: '/vulnerabilities',
                element: <Suspense><Vulnerabilities /></Suspense>
            },
        ]
    },
])