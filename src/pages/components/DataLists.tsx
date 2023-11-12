import { Link, useNavigate } from "react-router-dom"
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Fragment } from "react"

function NestedCardData(props: CardItem) {
    const navigate = useNavigate()
    const to = props.to + '/' + props.id
    return (
        <>
            <Link to={`#`} className='text-decoration-none text-color-gray'>
                <div className='card-head-title'>
                    <OverlayTrigger key='create' offset={[0, 10]} overlay={<Tooltip id='create' className='position-fixed'>Create</Tooltip>} trigger={['hover', 'focus']}>
                        <div className="d-flex card-head-title-ai gap-4" onClick={() => navigate(to + '/form')}>
                            <div className={`circle ${props.statusAvailability}`} />
                            <div className={`circle ${props.statusIntegrity}`} />
                        </div>
                    </OverlayTrigger>
                    <OverlayTrigger key={props.id} offset={[0, 10]} overlay={<Tooltip id={props.text} className='position-fixed'>{`View - ${props.text}`}</Tooltip>} trigger={['hover', 'focus']}>
                        <div className="card-item-row-2" onClick={() => navigate(to + '/view')}>
                            <h5 className='ml-auto text-truncate text-decoration-none'>{props.text}</h5>
                        </div>
                    </OverlayTrigger>
                </div >
            </Link>
        </>
    )
}

function NestedCardItem({ to, cardIdx = 0, lists }: { to: string; cardIdx?: number; lists: CardItem[] }) {
    if (cardIdx === lists?.length) return
    const data = lists[cardIdx]
    return <Fragment key={cardIdx}>
        <NestedCardData {...data} to={to} />
        <NestedCardItem lists={lists} cardIdx={cardIdx + 1} to={to} />
    </Fragment>

}

export default function DataLists<T extends Partial<CardData>>({ to, dataList, idx = 0 }: { to: string; dataList: T, idx?: number }) {
    if (idx === dataList?.length) return
    const data = dataList[idx!]
    return (
        <Fragment key={idx}>
            <div className="card-item p-0" >
                <div className="card-head text-color-white">
                    <OverlayTrigger key={data?.title} offset={[0, 10]} overlay={<Tooltip id={data?.title} className='position-fixed'>{data?.title}</Tooltip>} trigger={['hover', 'focus']}>
                        <div className='card-head-title'>
                            <div className="d-flex card-head-title-ai">
                                <h5>A</h5>
                                <h5>I</h5>
                            </div>
                            <div className="card-item-row-2" >
                                <h5 className='ml-auto d-inline text-truncate'>{data?.title}</h5>
                            </div>
                        </div>
                    </OverlayTrigger>
                </div>
                <div className="card-body">
                    <NestedCardItem lists={data?.lists as CardItem[]} to={to} />
                </div>
            </div>
            <DataLists to={to} dataList={dataList} idx={idx! + 1} />
        </Fragment>
    )
}