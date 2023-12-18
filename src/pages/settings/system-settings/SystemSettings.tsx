import { useLocation, useNavigate } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { ResponsiveTabs } from '../admin-settings/AdminSettings'
import { useAuthUser } from '../../../shared/contexts/AuthUser'

const systemTabs = [
    // {
    //     key: '/phase',
    //     label: 'Phase',
    // },
    {
        key: '/availability',
        label: 'Availability',
    },
    {
        key: '/integrity',
        label: 'Integrity',
    },
    // {
    //     key: '/initial-ram-rating',
    //     label: 'Initial Ram Rating',
    // },
    // {
    //     key: '/ram-priority',
    //     label: 'Ram Priority',
    // },
    // {
    //     key: '/re-asses-ram-rating',
    //     label: 'Re Asses Ram Rating',
    // },
    {
        key: '/status',
        label: 'Status',
    },
]

export default function SystemSettings() {

    return (
        <div className='mt-0'>
            <h5 className='mb-3 text-color-gray'>System Settings</h5>
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
    const onChange = (k: string) => navigate(`/system-settings` + k)

    return <RenderResponsiveTabs
        pathname={pathname}
        onChange={onChange}
    />
}

function RenderResponsiveTabs({ pathname, onChange }: { pathname: string; onChange: (k: string) => void }) {
    const { mapPermission } = useAuthUser()
    const hasAvailabilitySystemSettings = mapPermission.has('Availability Management - view list')
    const hasIntegritySystemSettings = mapPermission.has('Integrity Management - view list')
    const hasStatusSystemSettings = mapPermission.has('Statuses Management - view list')
    const items = []
    if (hasAvailabilitySystemSettings) items.push({
        key: '/availability',
        label: 'Availability',
    })
    if (hasIntegritySystemSettings) items.push({
        key: '/integrity',
        label: 'Integrity',
    })
    if (hasStatusSystemSettings) items.push({
        key: '/status',
        label: 'Status',
    })
    return <ResponsiveTabs pathname={pathname} onChange={onChange} items={items} />
}