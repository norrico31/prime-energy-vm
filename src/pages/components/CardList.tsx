import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { OverlayTrigger, Tooltip, Toast } from 'react-bootstrap'
import { Button } from '.';

function CardItem(props: CardItem) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const to = props.to + '/' + props.id
    return (
        <>
            <Link to={`#`} className='text-decoration-none text-color-gray'>
                <div className='card-head-title'>
                    <OverlayTrigger key='create' offset={[0, 10]} overlay={<Tooltip id='create' className='position-fixed'>Create</Tooltip>} trigger={['hover', 'focus']}>
                        <div className="d-flex card-head-title-ai gap-4">
                            <div className={`circle ${props.statusAvailability}`} onClick={() => navigate(to + '/form')} />
                            <div className={`circle ${props.statusIntegrity}`} onClick={() => navigate(to + '/form')} />
                        </div>
                    </OverlayTrigger>
                    <OverlayTrigger key={props.id} offset={[0, 10]} overlay={<Tooltip id={props.text} className='position-fixed'>{props.text}</Tooltip>} trigger={['hover', 'focus']}>
                        <div className="card-item-row-2">
                            <h5 className='ml-auto text-truncate text-decoration-none' onClick={() => setShow(!show)}>{props.text}</h5>
                        </div>
                    </OverlayTrigger>
                </div >
            </Link>
            <Toast show={show} onClose={(e) => {
                e?.stopPropagation()
                setShow(p => !p)
            }}>
                <Toast.Header>
                    <strong className="me-auto">Actions</strong>
                </Toast.Header>
                <Toast.Body className='d-flex justify-content-center'>
                    <Button variant='info' onClick={() => navigate(to + '/view')}>View</Button>
                    {/* <Button variant='success' onClick={() => navigate(to + '/form')}>Create</Button> */}
                </Toast.Body>
            </Toast>
        </>
    )
}

export default function CardList<T extends Partial<CardData>>({ to, data }: { to: string; data: T }) {
    return data?.map((d) => {
        return (
            <div className="card-item p-0" key={d?.id} >
                <div className="card-head text-color-white">
                    <OverlayTrigger key={d?.title} offset={[0, 10]} overlay={<Tooltip id={d?.title} className='position-fixed'>{d?.title}</Tooltip>} trigger={['hover', 'focus']}>
                        <div className='card-head-title'>
                            <div className="d-flex card-head-title-ai">
                                <h5>A</h5>
                                <h5>I</h5>
                            </div>
                            <div className="card-item-row-2" >
                                <h5 className='ml-auto d-inline text-truncate'>{d?.title}</h5>
                            </div>
                        </div>
                    </OverlayTrigger>
                </div>
                <div className="card-body">
                    {d?.lists.map((l, idx) => {
                        return (
                            <CardItem key={idx} {...l} to={to} />
                        )
                    })}
                </div>
            </div>
        )
    })
}


