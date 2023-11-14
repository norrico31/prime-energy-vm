import { Tabs as AntDTabs } from 'antd'
import { useLocation, useNavigate, Outlet, NavigateFunction } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import useWindowSize from '../../../shared/hooks/useWindowResize'

const adminTabs = [
    {
        key: '/location',
        label: 'Location',
    },
    {
        key: '/users',
        label: 'Users Management',
    },
    {
        key: '/roles',
        label: 'Roles',
    },
    {
        key: '/permission',
        label: 'Permission',
    },
    {
        key: '/audit-logs',
        label: 'Audit Logs',
    },
    {
        key: '/notification-logs',
        label: 'Notification Logs',
    },
]

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
    return <ResponsiveTabs pathname={pathname} navigate={navigate} />
}

function ResponsiveTabs({ pathname, navigate }: { pathname: string; navigate: NavigateFunction }) {
    const { width } = useWindowSize()
    return <AntDTabs
        destroyInactiveTabPane
        activeKey={'/' + pathname}
        tabPosition={width > 650 ? 'left' : 'top'}
        size='small'
        onChange={(key) => navigate(`/admin-settings` + key)}
        items={adminTabs.map((el) => ({
            label: el.label,
            key: el.key,
            children: <Outlet />,
        }))}
    />
}