import { Suspense, lazy, ReactNode } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { Layout } from "./components"

const Dashboard = lazy(() => import('./pages/Dashboard'))

function PageWrapper({ children }: { children: ReactNode }) {
    return <Suspense fallback={<Spinner animation='grow' />}>
        {children}
    </Suspense>
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
                element: <PageWrapper><Dashboard /></PageWrapper>
            },
        ]
    },
])