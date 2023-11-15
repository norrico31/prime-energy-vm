import Button from './Button'
import { Popconfirm, Space } from 'antd';
import { BsTrash, BsEye } from 'react-icons/bs';
import { AiOutlineEdit, AiOutlineDownload, AiOutlineLock } from 'react-icons/ai'

export default function ButtonActions({ loading, editData, viewData, deleteData, download, disabled, dataTitle, dataDescription }: ButtonActionProps) {
    return <Space>
        {viewData && (
            <Button variant="info" loading={loading} title='View' onClick={viewData}>
                <BsEye />
            </Button>
        )}
        {editData && (
            <Button variant="primary" loading={loading} title='Edit' onClick={editData}>
                <AiOutlineEdit />
            </Button>
        )}
        {deleteData && (
            <Popconfirm
                title={`Delete the ${dataTitle?.toLocaleUpperCase()}`}
                description={`Are you sure to delete this ${dataDescription}?`}
                okText='Delete'
                cancelText="No"
                onConfirm={deleteData}
            >
                <Button variant="danger" loading={loading} title='Delete'>
                    <BsTrash />
                </Button>
            </Popconfirm>
        )}
        {download && (
            <Button variant="success" loading={loading} title='Download' onClick={download}>
                <AiOutlineDownload />
            </Button>
        )}
        {disabled && (
            <Button variant="danger" loading={loading} title='Disabled' onClick={disabled}>
                <AiOutlineLock />
            </Button>
        )}
    </Space>
}