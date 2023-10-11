import Button from '../components/elements/Button'
import { BsTrash, BsEye } from 'react-icons/bs';
import { AiOutlineEdit, AiOutlineDownload } from 'react-icons/ai'

export default function ButtonActions({ loading, editData, viewData, deleteData, download }: ButtonActionProps) {
    return <>
        {viewData && (
            <Button variant="info" loading={loading} title='View'>
                <BsEye />
            </Button>
        )}
        {editData && (
            <Button variant="primary" loading={loading} title='Edit' onClick={editData}>
                <AiOutlineEdit />
            </Button>
        )}
        {deleteData && (

            <Button variant="danger" loading={loading} title='Delete'>
                <BsTrash />
            </Button>
        )}
        {download && (
            <Button variant="success" loading={loading} title='Download'>
                <AiOutlineDownload />
            </Button>
        )}
    </>
}