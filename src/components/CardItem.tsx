import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { OverlayTrigger, Tooltip, Toast } from 'react-bootstrap'
import { Button } from '.';

function CardItem(props: CardItem) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    return (
        <>
            <OverlayTrigger key={props.id} offset={[0, 10]} overlay={<Tooltip id={props.text} className='position-fixed'>{props.text}</Tooltip>} trigger={['hover', 'focus']}>
                <Link to={`#`} onClick={() => setShow(!show)}>
                    <div className='d-flex align-items-center  justify-content-evenly'>
                        <div className="d-flex gap-3">
                            <div className={`circle ${props.statusAvailability}`} />
                            <div className={`circle ${props.statusIntegrity}`} />
                        </div>
                        <div className="card-item-row-2 text-truncate">
                            <h5 className='ml-auto'>{props.text}</h5>
                        </div>
                    </div >
                </Link>
            </OverlayTrigger>
            <Toast show={show} onClose={(e) => {
                e?.stopPropagation()
                setShow(p => !p)
            }}>
                <Toast.Header>
                    <strong className="me-auto">Actions</strong>
                </Toast.Header>
                <Toast.Body className='d-flex gap-3 justify-content-center'>
                    <Button variant='info'>View</Button>
                    <Button variant='success' onClick={() => navigate('/swp/' + props.id)}>Create</Button>
                </Toast.Body>
            </Toast>
        </>
    )
}

export default CardItem