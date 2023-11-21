import { Tabs as AntDTabs } from 'antd'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import useWindowSize from '../../../shared/hooks/useWindowResize'

const adminTabs = [
    {
        key: '/location',
        label: 'Locations',
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
        label: 'Permissions',
    },
    {
        key: '/audit-logs',
        label: 'Audit Logs',
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
    const onChange = (k: string) => navigate(`/admin-settings` + k)
    return <ResponsiveTabs pathname={pathname} items={adminTabs} onChange={onChange} />
}

export function ResponsiveTabs({ pathname, items, onChange }: { pathname: string; items: typeof adminTabs; onChange: (k: string) => void }) {
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