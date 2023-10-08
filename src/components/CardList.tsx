export default function CardList({ data }: CardList) {
    return (
        <div className="card-list px-4 ">
            <div className="card-item">
                <div className="card-head text-color-white">
                    <div className='d-flex w-100 align-items-center'>
                        <div className="d-flex w-25 m-lg-4 justify-content-around">
                            <h5>A</h5>
                            <h5>I</h5>
                        </div>
                        <div className="row-col-2">
                            <h5 className='ml-auto'>{data.title}</h5>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    {data.map((d) => (
                        <CardItem key={d.text} statusAvailability='avail' statusIntegrity='unavail' text='tulala again' />
                    ))}
                </div>
            </div>
        </div>
    )
}

function CardItem(props: CardItem) {
    return <div className='d-flex w-100 align-items-center'>
        <div className="d-flex w-25 m-lg-4 justify-content-around">
            <div className={`circle ${props.statusAvailability}`} />
            <div className={`circle ${props.statusIntegrity}`} />
        </div>
        <div className="row-col-2">
            <h5 className='ml-auto'>{props.text}</h5>
        </div>
    </div>
}