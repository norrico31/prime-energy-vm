import { Link, useNavigate } from "react-router-dom"
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Spin } from 'antd'
import { Fragment } from "react"

function NestedCardData(props: TEquipment & { to: string }) {
    const navigate = useNavigate()
    const to = props.to + '/' + props.id
    return (
        <>
            <Link to={`#`} className='text-decoration-none text-color-gray'>
                <div className='card-head-title'>
                    <OverlayTrigger key='create' offset={[0, 10]} overlay={<Tooltip id='create' className='position-fixed'>Create</Tooltip>} trigger={['hover', 'focus']}>
                        <div className="d-flex card-head-title-ai gap-4" onClick={() => navigate(to + '/form')}>
                            <div className={`circle avail`} />
                            <div className={`circle avail`} />
                        </div>
                    </OverlayTrigger>
                    <OverlayTrigger key={props.id} offset={[0, 10]} overlay={<Tooltip id={props?.equipment_tag} className='position-fixed'>{`View - ${props?.equipment_tag}`}</Tooltip>} trigger={['hover', 'focus']}>
                        <div className="card-item-row-2" onClick={() => navigate(to + '/view')}>
                            <h5 className='ml-auto text-truncate text-decoration-none'>{props?.equipment_tag}</h5>
                        </div>
                    </OverlayTrigger>
                </div >
            </Link>
        </>
    )
}

function NestedCardItem({ to, cardIdx = 0, lists }: { to: string; cardIdx?: number; lists: TEquipment[] }) {
    if (cardIdx === lists?.length) return
    const data = lists[cardIdx]
    return <Fragment key={cardIdx}>
        <NestedCardData {...data} to={to} />
        <NestedCardItem lists={lists} cardIdx={cardIdx + 1} to={to} />
    </Fragment>
}

function DataItem({ to, data }: { to: string; data: TSystems }) {
    return <div className="card-item p-0" >
        <div className="card-head text-color-white">
            <OverlayTrigger key={data?.name} offset={[0, 10]} overlay={<Tooltip id={data?.name} className='position-fixed'>{data?.name}</Tooltip>} trigger={['hover', 'focus']}>
                <div className='card-head-title'>
                    <div className="d-flex card-head-title-ai">
                        <h5>A</h5>
                        <h5>I</h5>
                    </div>
                    <div className="card-item-row-2" >
                        <h5 className='ml-auto d-inline text-truncate'>{data?.name}</h5>
                    </div>
                </div>
            </OverlayTrigger>
        </div>
        <div className="card-body">
            <NestedCardItem lists={data?.equipments as TEquipment[]} to={to} />
        </div>
    </div>
}

export default function DataLists<T extends TSystems[]>({ to, dataList, idx = 0, loading }: { to: string; dataList: T, idx?: number; loading: boolean }) {
    if (loading) return <Spin size="lg" />
    if (!dataList.length) return <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }}>
        <h3>No Data</h3>
    </div>
    if (idx === dataList?.length) return
    const data = dataList[idx!]
    return <Fragment key={idx}>
        <DataItem to={to} data={data!} />
        <DataLists to={to} dataList={dataList} idx={idx! + 1} loading={loading} />
    </Fragment>
}