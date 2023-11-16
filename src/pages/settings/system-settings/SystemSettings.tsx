import { useLocation, useNavigate } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { ResponsiveTabs } from '../admin-settings/AdminSettings'

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

    return <ResponsiveTabs pathname={pathname} onChange={onChange} items={systemTabs} />
}