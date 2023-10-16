import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { AiOutlineCheckCircle, AiOutlineDownload, AiOutlineEdit, AiOutlineDelete, AiOutlineInfoCircle } from 'react-icons/ai'

export function Icon({ type }: { type: string | null }) {
    if (!type) return null
    return {
        'success': <AiOutlineCheckCircle className='notification-icon' />,
        'update': <AiOutlineEdit className='notification-icon' />,
        'delete': <AiOutlineDelete className='notification-icon' />,
        'info': <AiOutlineInfoCircle className='notification-icon' />,
        'download': <AiOutlineDownload className='notification-icon' />,
    }[type]
}


export default function Notification({ type, title, msg, onClose }: ToastNotification) {
    // const { type: { type, title, msg }, setType } = useNotifCtx()
    return <ToastContainer position="top-end" className="p-3 z-1">
        <Toast
            show={type !== null}
            onClose={onClose}
            // onClose={() => setType({ type: null, msg: '', title: '' })}
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
