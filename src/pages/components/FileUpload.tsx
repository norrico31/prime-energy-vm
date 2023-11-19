import {
    Button,
    Table,
    Form
} from "react-bootstrap";

export interface FileUploadProps {
    files: Array<File>;
    setFiles: React.Dispatch<React.SetStateAction<File[]>>
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
        const files = e.currentTarget.files as FileList;
        const newFiles: File[] = []
        for (let i = 0; i < files.length; i++) {
            newFiles.push(files[i]);
        }
        setFiles(newFiles);
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
                                <td>{item.name.slice(0, 40)}</td>
                                <td>{item.type}</td>
                                <td>
                                    <Button variant='danger' title='Remove' onClick={() => handleDelete(i)}>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default FileUpload;
