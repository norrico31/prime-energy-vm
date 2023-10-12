import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { firstLetterCapitalize } from '../../../shared/utils'

const assetTabs = [
    {
        key: 'asset',
        title: 'Asset',
    },
    {
        key: 'asset-classification',
        title: 'Asset Classification',
    },
]

export default function AssetSettings() {
    let { pathname } = useLocation()
    const navigate = useNavigate()
    pathname = pathname?.split('/')[2]
    return (
        <div className='mt-0'>
            <h2 className='mb-3'>Asset Settings - {firstLetterCapitalize(pathname.split('-').join(' '))}</h2>
            <Tabs
                activeKey={pathname}
                id="uncontrolled-tab-example"
                className="mb-3"
                onSelect={navigate as () => void}
            >
                {assetTabs.map((asset, idx) => (
                    <Tab key={idx} eventKey={asset.key} title={asset.title} className='w-100'>
                        <Outlet />
                    </Tab>
                ))}
            </Tabs>
        </div >
    )
}
