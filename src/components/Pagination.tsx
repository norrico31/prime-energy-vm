import BootstrapPagination from 'react-bootstrap/Pagination'

export default function Pagination({ active, lastPage, perPage, total, setCurrentPage }: PageProps) {
    const items: JSX.Element[] = []
    for (let i = 1; i <= lastPage; i++) {
        items.push(
            <BootstrapPagination.Item key={i} active={active === i} onClick={() => setCurrentPage(i)}>{i}</BootstrapPagination.Item>
        )
    }
    return <div className="d-flex justify-content-center w-25 align-items-center m-auto">
        <p className='mb-0'>Total: <b>{total}</b></p>
        <BootstrapPagination className='m-auto mb-2'>
            <BootstrapPagination.Prev disabled={active === 1} onClick={() => setCurrentPage(active - 1)} />
            <BootstrapPagination.Item active className='bg-color-primary'>{active}</BootstrapPagination.Item>
            <BootstrapPagination.Next disabled={active === lastPage} onClick={() => setCurrentPage(active + 1)} />
        </BootstrapPagination>
        <p className='mb-0'>Per Page: <b>{perPage}</b></p>
    </div>
}
