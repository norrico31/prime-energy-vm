import {
    Button,
    Table,
    Form
} from "react-bootstrap";

export interface FileUploadProps {
    files: Array<TTransactionFile>;
    setFiles: React.Dispatch<React.SetStateAction<TTransactionFile[]>>
}

const FileUpload: React.FunctionComponent<FileUploadProps> = ({
    files,
    setFiles
}) => {
    const handleDelete = (i: number) => {
        const newFiles = [...files]
        newFiles.splice(i, 1);
        setFiles(newFiles)
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filesFromUpload = e.currentTarget.files as unknown as TTransactionFile[];
        const newFiles: TTransactionFile[] = []
        for (let i = 0; i < filesFromUpload.length; i++) {
            const file = filesFromUpload[i] as unknown as TTransactionFile
            newFiles.push(file);
        }
        setFiles([...files, ...newFiles]);
        e.target.value = '';
    }

    return (
        <>
            <Form.Control type="file" multiple onChange={handleOnChange} />
            <Table bordered striped hover className='text-center'>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td key={i + ":#"}>{i + 1}</td>
                                <td>{item?.name.slice(0, 40) ?? item?.file.slice(0, 40)}</td>
                                <td>{item?.type ?? item?.file_type}</td>
                                <td><Button variant='danger' title='Remove' onClick={() => handleDelete(i)}>Delete</Button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default FileUpload;
