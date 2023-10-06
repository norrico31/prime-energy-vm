import { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

// TODO: MODIFIED COLORS

function Notification() {
    const [show, setShow] = useState(true);
    return <ToastContainer position="top-center" className="p-3" style={{ zIndex: 1 }}>
        <Toast show={show} onClose={() => setShow(!show)} autohide>
            <Toast.Header>
                <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                />
                <strong className="me-auto">Bootstrap</strong>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
    </ToastContainer>
}

export default Notification;