import { Tabs as AntDTabs } from 'antd'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import useWindowSize from '../../../shared/hooks/useWindowResize'
import { useAuthUser } from '../../../shared/contexts/AuthUser'

export default function AdminSettings() {
    return (
        <div className='mt-0'>
            <h5 className='mb-3 text-color-gray'>Admin Settings</h5>
            <Row className='justify-content-between'>
                <Tabs />
            </Row>
        </div >
    )
}

function Tabs() {
    let { pathname } = useLocation()
    const navigate = useNavigate()
    pathname = pathname?.split('/')[2]
    const onChange = (k: string) => navigate(`/admin-settings` + k)

    const { mapPermission } = useAuthUser()
    const hasSitesAdminSettings = mapPermission.has('Sites Management - view list')
    const hasUsersAdminSettings = mapPermission.has('Users Management - view list')
    const hasRolesAdminSettings = mapPermission.has('Roles Management - view list')
    const hasPermissionsAdminSettings = mapPermission.has('Permissions Management - view list')
    const hasAuditAdminSettings = mapPermission.has('Audit Management - view list')
    const items = [
        ...(hasSitesAdminSettings ? [{
            key: '/location',
            label: 'Locations',
        }] : []),
        ...(hasUsersAdminSettings ? [{
            key: '/users',
            label: 'Users Management',
        }] : []),
        ...(hasRolesAdminSettings ? [{
            key: '/roles',
            label: 'Roles',
        }] : []),
        ...(hasPermissionsAdminSettings ? [{
            key: '/permission',
            label: 'Permissions',
        }] : []),
        ...(hasAuditAdminSettings ? [{
            key: '/audit-logs',
            label: 'Audit Logs',
        }] : []),
    ]

    return <ResponsiveTabs pathname={pathname} onChange={onChange} items={items} />
}

export function ResponsiveTabs({ pathname, items, onChange }: { pathname: string; onChange: (k: string) => void; items: { key: string; label: string }[] }) {
    const { width } = useWindowSize()
    return <AntDTabs
        destroyInactiveTabPane
        activeKey={'/' + pathname}
        tabPosition={width > 650 ? 'left' : 'top'}
        size='small'
        onChange={onChange}
        items={items.map((el) => ({
            label: el.label,
            key: el.key,
            children: <Outlet />,
        }))}
    />
}