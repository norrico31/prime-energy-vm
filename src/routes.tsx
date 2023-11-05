import { Suspense as ReactSuspense, lazy, ReactNode } from "react"
import { Navigate, createBrowserRouter } from "react-router-dom"
import { Layout } from "./pages/components"

const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

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
const LocationSettings = lazy(() => import('./pages/settings/location-settings/LocationSettings'))
const LocationSystems = lazy(() => import('./pages/settings/location-settings/Systems'))
const LocationEquipments = lazy(() => import('./pages/settings/location-settings/Equipments'))

// SYSTEM SETTINGS
const SystemSettings = lazy(() => import('./pages/settings/system-settings/SystemSettings'))
const Phase = lazy(() => import('./pages/settings/system-settings/Phase'))
const Availability = lazy(() => import('./pages/settings/system-settings/Availability'))
const Integrity = lazy(() => import('./pages/settings/system-settings/Integrity'))
const InitialRamRating = lazy(() => import('./pages/settings/system-settings/InitialRamRating'))
const RamPriority = lazy(() => import('./pages/settings/system-settings/RamPriority'))
const ReAssesRamRating = lazy(() => import('./pages/settings/system-settings/ReAssesRamRating'))
const Status = lazy(() => import('./pages/settings/system-settings/Status'))

// ADMIN admin
const AdminSettings = lazy(() => import('./pages/settings/admin-settings/AdminSettings'))
const Site = lazy(() => import('./pages/settings/admin-settings/Site'))
const Users = lazy(() => import('./pages/settings/admin-settings/Users'))
const RolesPermission = lazy(() => import('./pages/settings/admin-settings/RolesPermission'))
const AuditLogs = lazy(() => import('./pages/settings/admin-settings/AuditLogs'))
const NotificationLogs = lazy(() => import('./pages/settings/admin-settings/NotificationLogs'))

function Suspense({ children }: { children: ReactNode }) {
    return <ReactSuspense fallback={<div />}>
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
                element: <Suspense><Dashboard /></Suspense>,
                children: [
                    {
                        path: '',
                        element: <Navigate to='swp' />
                    },
                    {
                        path: 'swp',
                        element: <Suspense><SwpLists /></Suspense>,
                    },
                    {
                        path: 'ogp',
                        element: <Suspense><OgpLists /></Suspense>,
                    },
                    {
                        path: 'pipelines',
                        element: <Suspense><PipelineLists /></Suspense>,
                    },
                    {
                        path: 'critical-equipment',
                        element: <Suspense><CriticalEquipmentList /></Suspense>,
                    },
                ]
            },
            {
                path: '',
                element: <Navigate to='dashboard' />
            },
            {
                path: '/swp',
                element: <Suspense><Swp /></Suspense>,
                children: [
                    {
                        path: '',
                        element: <Suspense><SwpLists /></Suspense>,
                    },
                    {
                        path: ':swpId',
                        children: [
                            {
                                path: 'view',
                                element: <Suspense><SwpView /></Suspense>,
                            },
                            {
                                path: 'form',
                                element: <Suspense><Form /></Suspense>,
                            },
                            {
                                path: 'edit/:swpItemId',
                                element: <Suspense><Form /></Suspense>,
                            },
                        ]
                    },
                    {
                        path: 'form',
                        element: <Suspense><Form /></Suspense>,
                    }

                ]
            },
            {
                path: '/ogp',
                element: <Suspense><Ogp /></Suspense>,
                children: [
                    {
                        path: '',
                        element: <Suspense><OgpLists /></Suspense>,
                    },
                    {
                        path: ':ogpId',
                        children: [
                            {
                                path: 'view',
                                element: <Suspense><OgpView /></Suspense>,
                            },
                            {
                                path: 'form',
                                element: <Suspense><Form /></Suspense>,
                            },
                            {
                                path: 'edit/:ogpItemId',
                                element: <Suspense><Form /></Suspense>,
                            },
                        ]
                    },
                    {
                        path: 'form',
                        element: <Suspense><Form /></Suspense>,
                    }

                ]
            },
            {
                path: '/pipelines',
                element: <Suspense><Pipelines /></Suspense>,
                children: [
                    {
                        path: '',
                        element: <Suspense><PipelineLists /></Suspense>,
                    },
                    {
                        path: ':pipelineId',
                        children: [
                            {
                                path: 'view',
                                element: <Suspense><PipelineView /></Suspense>,
                            },
                            {
                                path: 'form',
                                element: <Suspense><Form /></Suspense>,
                            },
                            {
                                path: 'edit/:pipelineItemId',
                                element: <Suspense><Form /></Suspense>,
                            },
                        ]
                    },
                    {
                        path: 'form',
                        element: <Suspense><Form /></Suspense>,
                    }

                ]
            },
            {
                path: '/critical-equipment',
                element: <Suspense><CriticalEquipments /></Suspense>,
                children: [
                    {
                        path: '',
                        element: <Suspense><CriticalEquipmentList /></Suspense>,
                    },
                    {
                        path: ':criticalEquipmentId',
                        children: [
                            {
                                path: 'view',
                                element: <Suspense><CriticalEquipmentView /></Suspense>,
                            },
                            {
                                path: 'form',
                                element: <Suspense><Form /></Suspense>,
                            },
                            {
                                path: 'edit/:criticalEquipmentItemId',
                                element: <Suspense><Form /></Suspense>,
                            },
                        ]
                    },
                    {
                        path: 'form',
                        element: <Suspense><Form /></Suspense>,
                    }

                ]
            },
            {
                path: '/vulnerabilities',
                element: <Suspense><Vulnerabilities /></Suspense>
            },
            // {
            //     path: '/form',
            //     element: <Suspense><Form /></Suspense>
            // },
            {
                path: '/Location-settings',
                element: <Suspense><LocationSettings /></Suspense>,
                children: [
                    {
                        path: 'systems',
                        element: <Suspense><LocationSystems /></Suspense>
                    },
                    {
                        path: 'equipments',
                        element: <Suspense><LocationEquipments /></Suspense>
                    },
                ]
            },
            {
                path: '/system-settings',
                element: <Suspense><SystemSettings /></Suspense>,
                children: [
                    {
                        path: 'phase',
                        element: <Suspense><Phase /></Suspense>
                    },
                    {
                        path: 'availability',
                        element: <Suspense><Availability /></Suspense>
                    },
                    {
                        path: 'integrity',
                        element: <Suspense><Integrity /></Suspense>
                    },
                    {
                        path: 'initial-ram-rating',
                        element: <Suspense><InitialRamRating /></Suspense>
                    },
                    {
                        path: 'ram-priority',
                        element: <Suspense><RamPriority /></Suspense>
                    },
                    {
                        path: 're-asses-ram-rating',
                        element: <Suspense><ReAssesRamRating /></Suspense>
                    },
                    {
                        path: 'status',
                        element: <Suspense><Status /></Suspense>
                    },
                ]
            },
            {
                path: '/admin-settings',
                element: <Suspense><AdminSettings /></Suspense>,
                children: [
                    {
                        path: 'site',
                        element: <Suspense><Site /></Suspense>
                    },
                    {
                        path: 'users',
                        element: <Suspense><Users /></Suspense>
                    },
                    {
                        path: 'roles-permission',
                        element: <Suspense><RolesPermission /></Suspense>
                    },
                    {
                        path: 'audit-logs',
                        element: <Suspense><AuditLogs /></Suspense>
                    },
                    {
                        path: 'notification-logs',
                        element: <Suspense><NotificationLogs /></Suspense>
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