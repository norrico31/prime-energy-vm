import Button from './Button'
import { BsTrash, BsEye } from 'react-icons/bs';
import { AiOutlineEdit, AiOutlineDownload, AiOutlineLock } from 'react-icons/ai'

export default function ButtonActions({ loading, editData, viewData, deleteData, download, disabled }: ButtonActionProps) {
    return <>
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
            <Button variant="danger" loading={loading} title='Delete' onClick={deleteData}>
                <BsTrash />
            </Button>
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
    </>
}