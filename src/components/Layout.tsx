import { Outlet } from "react-router-dom"
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { useNotifCtx } from '../shared/contexts/Notification'
import { AiOutlineCheckCircle, AiOutlineDownload, AiOutlineEdit, AiOutlineDelete, AiOutlineInfoCircle } from 'react-icons/ai'
import { Navbar } from "."

export default function Layout() {
    return (
        <>
            <Notification />
            <Navbar />
            {<Outlet />}
        </>
    )
}

const Icon = ({ type }: { type: string | null }) => {
    if (!type) return null
    const icons: Record<string, JSX.Element> = {
        'success': <AiOutlineCheckCircle className='notification-icon' />,
        'update': <AiOutlineEdit className='notification-icon' />,
        'delete': <AiOutlineDelete className='notification-icon' />,
        'info': <AiOutlineInfoCircle className='notification-icon' />,
        'download': <AiOutlineDownload className='notification-icon' />,
    }
    return icons[type]
}

function Notification() {
    const { type: { type, title, msg }, setType } = useNotifCtx()
    return <ToastContainer position="top-end" className="p-3 z-1">
        <Toast
            show={type !== null}
            onClose={() => setType({ type: null, msg: '', title: '' })}
            autohide
        >
            <Toast.Header className={`notification-title-${type}`}>
                <Icon type={type} />
                <strong className="me-auto ">{title}</strong>
            </Toast.Header>
            <Toast.Body className={`notification-text-${type}`}>{msg}</Toast.Body>
        </Toast>
    </ToastContainer>
}