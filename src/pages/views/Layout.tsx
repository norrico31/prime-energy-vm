import { ReactNode } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button } from '../../components'

export default function MainLayout({ children }: { children: ReactNode }) {
    const navigate = useNavigate()
    return <>
        <div className={`d-flex justify-content-between`}>
            {children}
            <Button variant='outline-info' title='SWP Lists' className='mb-4 text-decoration-none' onClick={() => navigate(-1)}>Back to lists</Button>
        </div>
        <div>
            <Outlet />
        </div>
    </>
}
