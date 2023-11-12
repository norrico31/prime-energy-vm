import { Outlet } from 'react-router-dom'
import { PageHeading } from './components'

export default function CriticalEquipment() {
    return <>
        <PageHeading title='Critical Equipments' onClick={() => alert('print report critical')} />
        <Outlet />
    </>
}
