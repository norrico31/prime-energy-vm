import { Suspense, lazy, ReactNode } from "react"
import { Navigate, createBrowserRouter } from "react-router-dom"
import { Layout } from "./pages/components"

const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Profile = lazy(() => import('./pages/Profile'))

const Vulnerabilities = lazy(() => import('./pages/Vulnerabilities'))
const Form = lazy(() => import('./pages/Form'))

const Swp = lazy(() => import('./pages/Swp'))
const SwpLists = lazy(() => import('./pages/features/SwpLists'))
const SwpView = lazy(() => import('./pages/features/SwpView'))

const Ogp = lazy(() => import('./pages/Ogp'))
const OgpLists = lazy(() => import('./pages/features/OgpLists'))
const OgpView = lazy(() => import('./pages/features/OgpView'))

const Pipelines = lazy(() => import('./pages/Pipelines'))
const PipelineView = lazy(() => import('./pages/features/PipelineView'))
const PipelineLists = lazy(() => import('./pages/features/PipelineLists'))

const CriticalEquipments = lazy(() => import('./pages/CriticalEquipment'))
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
                        element: <AsyncComponent><SwpLists /></AsyncComponent>,
                    },
                    {
                        path: 'ogp',
                        element: <AsyncComponent><OgpLists /></AsyncComponent>,
                    },
                    {
                        path: 'pipelines',
                        element: <AsyncComponent><PipelineLists /></AsyncComponent>,
                    },
                    {
                        path: 'critical-equipment',
                        element: <AsyncComponent><CriticalEquipmentList /></AsyncComponent>,
                    },
                ]
            },
            {
                path: '',
                element: <Navigate to='dashboard' />
            },
            {
                path: '/profile',
                element: <AsyncComponent><Profile /></AsyncComponent>
            },
            {
                path: '/swp',
                element: <AsyncComponent><Swp /></AsyncComponent>,
                children: [
                    {
                        path: '',
                        element: <AsyncComponent><SwpLists /></AsyncComponent>,
                    },
                    {
                        path: ':swpId',
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
                                path: 'edit/:swpItemId',
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
                element: <AsyncComponent><Ogp /></AsyncComponent>,
                children: [
                    {
                        path: '',
                        element: <AsyncComponent><OgpLists /></AsyncComponent>,
                    },
                    {
                        path: ':ogpId',
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
                                path: 'edit/:ogpItemId',
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
                element: <AsyncComponent><Pipelines /></AsyncComponent>,
                children: [
                    {
                        path: '',
                        element: <AsyncComponent><PipelineLists /></AsyncComponent>,
                    },
                    {
                        path: ':pipelineId',
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
                                path: 'edit/:pipelineItemId',
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
                element: <AsyncComponent><CriticalEquipments /></AsyncComponent>,
                children: [
                    {
                        path: '',
                        element: <AsyncComponent><CriticalEquipmentList /></AsyncComponent>,
                    },
                    {
                        path: ':criticalEquipmentId',
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
                                path: 'edit/:criticalEquipmentItemId',
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