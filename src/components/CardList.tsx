import { Link, useNavigate } from "react-router-dom"
import { Button } from './'
import { Row, Col } from "react-bootstrap"
import { AiOutlineFolderAdd } from "react-icons/ai"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export default function CardList({ to, data }: CardList & { to: string }) {
    return (
        <div className='px-4'>
            <MainHead to={to} />
            <Row className='card-list'>
                {data?.map((d) => {
                    return (
                        <OverlayTrigger key={d.id} offset={[0, 10]} overlay={<Tooltip id={d.title} className='position-fixed'>{d.title}</Tooltip>} trigger={['hover', 'focus']}>
                            <Link to={`/swp/${d.id}`} className="card-item p-0" >
                                <div className="card-head text-color-white">
                                    <div className='d-flex w-100 align-items-center justify-content-evenly'>
                                        <div className="d-flex gap-3">
                                            <h5>A</h5>
                                            <h5>I</h5>
                                        </div>
                                        <div className="card-item-row-2 text-truncate">
                                            <h5 className='ml-auto d-inline'>{d.title}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    {d?.lists.map((l, idx) => {
                                        return (
                                            <CardItem key={idx} {...l} />
                                        )
                                    })}
                                </div>
                            </Link>
                        </OverlayTrigger>
                    )
                })}
            </Row>
        </div>
    )
}

function MainHead({ to }: { to: string }) {
    const navigate = useNavigate()
    return <Row>
        <Col className='p-0 mb-2'>
            <Button variant='success' className='d-flex gap-1 align-items-center' title='Create' onClick={() => navigate(to)}>
                <AiOutlineFolderAdd className='fs-5' />
                Create
            </Button>
        </Col>
    </Row>
}

function CardItem(props: CardItem) {
    return <div className='d-flex align-items-center  justify-content-evenly'>
        <div className="d-flex gap-3">
            <div className={`circle ${props.statusAvailability}`} />
            <div className={`circle ${props.statusIntegrity}`} />
        </div>
        <div className="card-item-row-2 text-truncate">
            <h5 className='ml-auto'>{props.text}</h5>
        </div>
    </div>
}