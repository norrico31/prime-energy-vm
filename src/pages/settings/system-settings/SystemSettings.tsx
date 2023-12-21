import { useLocation, useNavigate } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { ResponsiveTabs } from '../admin-settings/AdminSettings'
import { useAuthUser } from '../../../shared/contexts/AuthUser'

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
    const hasAvailabilitySystemSettings = mapPermission.has('Availability Management - Allow View List')
    const hasIntegritySystemSettings = mapPermission.has('Integrity Management - Allow View List')
    const hasStatusSystemSettings = mapPermission.has('Statuses Management - Allow View List')
    const items = [
        ...(hasAvailabilitySystemSettings ? [{
            key: '/availability',
            label: 'Availability',
        }] : []),
        ...(hasIntegritySystemSettings ? [{
            key: '/integrity',
            label: 'Integrity',
        }] : []),
        ...(hasStatusSystemSettings ? [{
            key: '/status',
            label: 'Status',
        }] : []),
    ]
    return <ResponsiveTabs pathname={pathname} onChange={onChange} items={items} />
}