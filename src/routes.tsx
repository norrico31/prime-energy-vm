import { Suspense as ReactSuspense, lazy, ReactNode } from "react"
import { createBrowserRouter, Navigate } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'
import { Layout } from "./components"

const Login = lazy(() => import('./pages/Login'))

const Dashboard = lazy(() => import('./pages/Dashboard'))
const PrintReport = lazy(() => import('./pages/PrintReport'))
const Swp = lazy(() => import('./pages/Swp'))
const Ogp = lazy(() => import('./pages/Ogp'))
const Vulnerabilities = lazy(() => import('./pages/Vulnerabilities'))
const Pipelines = lazy(() => import('./pages/Pipelines'))
const Form = lazy(() => import('./pages/Form'))

// ASSET SETTINGS
const AssetSettings = lazy(() => import('./pages/settings/asset-settings/AssetSettings'))
const Asset = lazy(() => import('./pages/settings/asset-settings/Asset'))
const AssetClassification = lazy(() => import('./pages/settings/asset-settings/AssetClassification'))


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
            {
                path: '/form',
                element: <Suspense><Form /></Suspense>
            },
            {
                path: '/form',
                element: <Suspense><Form /></Suspense>
            },
            {
                path: '/asset-settings',
                element: <Suspense><AssetSettings /></Suspense>,
                children: [
                    {
                        path: 'asset',
                        element: <Suspense><Asset /></Suspense>
                    },
                    {
                        path: 'asset-classification',
                        element: <Suspense><AssetClassification /></Suspense>
                    },
                ]
            },
        ],
    },
    {
        path: '/login',
        element: <Suspense><Login /></Suspense>
    }
])