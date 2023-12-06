import { Suspense, lazy, ReactNode } from "react"
import { Navigate, createBrowserRouter, Outlet, useNavigate } from "react-router-dom"
import { Layout } from "./pages/components"

const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const OwnerDashboard = lazy(() => import('./pages/OwnerDashboard'))
const Profile = lazy(() => import('./pages/Profile'))

const Vulnerabilities = lazy(() => import('./pages/Vulnerabilities'))
const Form = lazy(() => import('./pages/Form'))

const Lists = lazy(() => import('./pages/features/Lists'))
const SwpLists = lazy(() => import('./pages/features/SwpLists'))
const SwpView = lazy(() => import('./pages/features/SwpView'))

const OgpLists = lazy(() => import('./pages/features/OgpLists'))
const OgpView = lazy(() => import('./pages/features/OgpView'))

const PipelineView = lazy(() => import('./pages/features/PipelineView'))
const PipelineLists = lazy(() => import('./pages/features/PipelineLists'))

const CriticalEquipmentView = lazy(() => import('./pages/features/CriticalEquipmentView'))
const CriticalEquipmentList = lazy(() => import('./pages/features/CriticalEquipmentList'))

// ASSET SETTINGS
const LocationSystems = lazy(() => import('./pages/settings/location-settings/Systems'))
const LocationEquipments = lazy(() => import('./pages/settings/location-settings/Equipments'))

// SYSTEM SETTINGS
const SystemSettings = lazy(() => import('./pages/settings/system-settings/SystemSettings'))
const Availability = lazy(() => import('./pages/settings/system-settings/Availability'))
const Integrity = lazy(() => import('./pages/settings/system-settings/Integrity'))
const Status = lazy(() => import('./pages/settings/system-settings/Status'))

// ADMIN admin
const AdminSettings = lazy(() => import('./pages/settings/admin-settings/AdminSettings'))
const Location = lazy(() => import('./pages/settings/admin-settings/Location'))
const Users = lazy(() => import('./pages/settings/admin-settings/Users'))
const Roles = lazy(() => import('./pages/settings/admin-settings/Roles'))
const Permission = lazy(() => import('./pages/settings/admin-settings/Permission'))
const AuditLogs = lazy(() => import('./pages/settings/admin-settings/AuditLogs'))

const PrintReport = lazy(() => import('./pages/features/PrintReport'))

function AsyncComponent({ children }: { children: ReactNode }) {
    return <Suspense fallback={<div />}>
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
                element: <AsyncComponent><Dashboard /></AsyncComponent>,
                children: [
                    {
                        path: '',
                        element: <Navigate to='critical-equipment' />
                    },
                    {
                        path: 'swp',
                        element: <AsyncComponent><Lists title="swp" navigate='/swp/print-report' /></AsyncComponent>,
                    },
                    {
                        path: 'ogp',
                        element: <AsyncComponent><Lists title="ogp" navigate='/ogp/print-report' /></AsyncComponent>,
                    },
                    {
                        path: 'pipelines',
                        element: <AsyncComponent><Lists title="pipelines" navigate='/ogp/print-report' /></AsyncComponent>,
                    },
                    {
                        path: 'critical-equipment',
                        element: <AsyncComponent><Lists title="critical" navigate='/ogp/print-report' /></AsyncComponent>,
                    },
                ]
            },
            {
                path: '',
                element: <Navigate to='dashboard' />
            },
            {
                path: '/owner-dashboard',
                element: <AsyncComponent><OwnerDashboard /></AsyncComponent>
            },
            {
                path: '/profile',
                element: <AsyncComponent><Profile /></AsyncComponent>
            },
            {
                path: '/swp',
                element: <AsyncComponent><Outlet /></AsyncComponent>,
                children: [
                    {
                        path: '',
                        element: <AsyncComponent><Lists title="swp" /></AsyncComponent>,
                    },
                    {
                        path: 'print-report',
                        element: <AsyncComponent><PrintReport title='SWP' /></AsyncComponent>,
                    },
                    {
                        path: ':equipmentId',
                        children: [
                            {
                                path: 'view',
                                element: <AsyncComponent><SwpView /></AsyncComponent>,
                            },
                            {
                                path: 'form',
                                element: <AsyncComponent><Form /></AsyncComponent>,
                            },
                            {
                                path: 'edit/:transactionId',
                                element: <AsyncComponent><Form /></AsyncComponent>,
                            },
                        ]
                    },
                    {
                        path: 'form',
                        element: <AsyncComponent><Form /></AsyncComponent>,
                    }

                ]
            },
            {
                path: '/ogp',
                element: <AsyncComponent><Outlet /></AsyncComponent>,
                children: [
                    {
                        path: '',
                        element: <AsyncComponent><Lists title="ogp" navigate='/ogp/print-report' /></AsyncComponent>,
                    },
                    {
                        path: 'print-report',
                        element: <AsyncComponent><PrintReport title='OGP' /></AsyncComponent>,
                    },
                    {
                        path: ':equipmentId',
                        children: [
                            {
                                path: 'view',
                                element: <AsyncComponent><OgpView /></AsyncComponent>,
                            },
                            {
                                path: 'form',
                                element: <AsyncComponent><Form /></AsyncComponent>,
                            },
                            {
                                path: 'edit/:transactionId',
                                element: <AsyncComponent><Form /></AsyncComponent>,
                            },
                        ]
                    },
                    {
                        path: 'form',
                        element: <AsyncComponent><Form /></AsyncComponent>,
                    }
                ]
            },
            {
                path: '/pipelines',
                element: <AsyncComponent><Outlet /></AsyncComponent>,
                children: [
                    {
                        path: '',
                        element: <AsyncComponent><Lists title="pipelines" navigate='/pipelines/print-report' /></AsyncComponent>,
                    },
                    {
                        path: 'print-report',
                        element: <AsyncComponent><PrintReport title='Pipelines' /></AsyncComponent>,
                    },
                    {
                        path: ':equipmentId',
                        children: [
                            {
                                path: 'view',
                                element: <AsyncComponent><PipelineView /></AsyncComponent>,
                            },
                            {
                                path: 'form',
                                element: <AsyncComponent><Form /></AsyncComponent>,
                            },
                            {
                                path: 'edit/:transactionId',
                                element: <AsyncComponent><Form /></AsyncComponent>,
                            },
                        ]
                    },
                    {
                        path: 'form',
                        element: <AsyncComponent><Form /></AsyncComponent>,
                    }
                ]
            },
            {
                path: '/critical-equipment',
                element: <AsyncComponent><Outlet /></AsyncComponent>,
                children: [
                    {
                        path: '',
                        element: <AsyncComponent><Lists title="critical" navigate='/critical-equipment/print-report' /></AsyncComponent>,
                    },
                    {
                        path: 'print-report',
                        element: <AsyncComponent><PrintReport title='Critical' /></AsyncComponent>,
                    },
                    {
                        path: ':equipmentId',
                        children: [
                            {
                                path: 'view',
                                element: <AsyncComponent><CriticalEquipmentView /></AsyncComponent>,
                            },
                            {
                                path: 'form',
                                element: <AsyncComponent><Form /></AsyncComponent>,
                            },
                            {
                                path: 'edit/:transactionId',
                                element: <AsyncComponent><Form /></AsyncComponent>,
                            },
                        ]
                    },
                    {
                        path: 'form',
                        element: <AsyncComponent><Form /></AsyncComponent>,
                    }
                ]
            },
            {
                path: '/vulnerabilities',
                element: <AsyncComponent><Vulnerabilities /></AsyncComponent>
            },
            {
                path: '/Location-settings/systems',
                element: <AsyncComponent><LocationSystems /></AsyncComponent>,
            },
            {
                path: '/Location-settings/equipments',
                element: <AsyncComponent><LocationEquipments /></AsyncComponent>,
            },
            {
                path: '/system-settings',
                element: <AsyncComponent><SystemSettings /></AsyncComponent>,
                children: [
                    {
                        path: 'availability',
                        element: <AsyncComponent><Availability /></AsyncComponent>
                    },
                    {
                        path: 'integrity',
                        element: <AsyncComponent><Integrity /></AsyncComponent>
                    },
                    {
                        path: 'status',
                        element: <AsyncComponent><Status /></AsyncComponent>
                    },
                ]
            },
            {
                path: '/admin-settings',
                element: <AsyncComponent><AdminSettings /></AsyncComponent>,
                children: [
                    {
                        path: 'location',
                        element: <AsyncComponent><Location /></AsyncComponent>
                    },
                    {
                        path: 'users',
                        element: <AsyncComponent><Users /></AsyncComponent>
                    },
                    {
                        path: 'roles',
                        element: <AsyncComponent><Roles /></AsyncComponent>
                    },
                    {
                        path: 'permission',
                        element: <AsyncComponent><Permission /></AsyncComponent>
                    },
                    {
                        path: 'audit-logs',
                        element: <AsyncComponent><AuditLogs /></AsyncComponent>
                    },
                ]
            },
        ],
    },
    {
        path: '/login',
        element: <AsyncComponent><Login /></AsyncComponent>
    }
])