import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { OverlayTrigger, Tooltip, Toast } from 'react-bootstrap'
import { Button } from '.';

function CardItem(props: CardItem) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const to = props.to + '/' + props.id
    console.log(to)
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
                    <Button variant='info' onClick={() => navigate(to + '/view')}>View</Button>
                    <Button variant='success' onClick={() => navigate(to + '/form')}>Create</Button>
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
                    <div className='d-flex w-100 align-items-center gap-5 justify-content-center'>
                        <div className="d-flex gap-3">
                            <h5>A</h5>
                            <h5>I</h5>
                        </div>
                        <div className="card-item-row-2  text-truncate" >
                            <h5 className='ml-auto d-inline'>{d?.title}</h5>
                        </div>
                    </div>
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


