import { ReactNode } from 'react'
import { Table as AntDTable } from 'antd'
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';

type Props<T> = {
    loading: boolean
    columns: ColumnsType<T>;
    dataSource: Array<T>

} & Partial<{
    isSizeChanger: boolean;
    tableParams: TableParams<TablePaginationConfig>;
    onChange: (pagination: TablePaginationConfig) => void
}>

export default function Table<D extends Partial<Common>>({ loading, columns, dataSource, tableParams, isSizeChanger, onChange }: Props<D>) {
    return <AntDTable
        loading={loading}
        columns={columns as ColumnsType<D>}
        dataSource={dataSource ?? []}
        rowKey={d => d?.id as string} scroll={{ x: 100, }}
        onChange={onChange}
        pagination={tableParams ? {
            ...tableParams?.pagination,
            showSizeChanger: isSizeChanger,
            position: ['bottomCenter'],
            showTotal: (number: number) => <p style={{ marginRight: '1rem' }}>Total: {number}</p>,
            itemRender: ItemRender,
        } : false}
    />
}

function ItemRender(_: number, type: string, originalElement: ReactNode) {
    if (type === 'prev') return <a id='#pagination'>Previous</a>
    if (type === 'next') return <a id='#pagination'>Next</a>
    return originalElement
}