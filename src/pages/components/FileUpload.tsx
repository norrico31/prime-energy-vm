import React, { useState } from "react";
import {
    CloseButton,
    Button,
    OverlayTrigger,
    Tooltip,
    TooltipProps,
    Table,
    Form
} from "react-bootstrap";

export interface FileUploadProps {
    onChange?: (files: Array<File>) => void;
    // maxFileSize?: number;
    value?: Array<File>;
    accept?: string;
    // maxFileCount: number;
}

const FileUpload: React.FunctionComponent<FileUploadProps> = ({
    onChange,
    // maxFileSize,
    value,
    accept,
    // maxFileCount = 2
}) => {
    // the list of files to be uploaded (lift this state to parent comp)
    const [list, setList] = useState(value || []);

    const rerender = () => {
        setList(list.slice());
        onChange?.(list);
    };

    const handleUp = (i: number) => {
        const temp = list[i];
        list[i] = list[i - 1];
        list[i - 1] = temp;
        rerender();
    };

    const handleDown = (i: number) => {
        const temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
        rerender();
    };

    const handleDelete = (i: number) => {
        list.splice(i, 1);
        rerender();
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files as FileList;
        console.log('uploaded files: ', files)
        if (files) {
            for (let i = 0; i < files.length; i++) {
                list.push(files[i]);
            }
            rerender();
        }
    };

    // const renderTooltip = (
    //     props: JSX.IntrinsicAttributes &
    //         TooltipProps &
    //         React.RefAttributes<HTMLDivElement>
    // ) => <Tooltip {...props}>File exceeds maximum allowable size</Tooltip>;

    // const validate = (file: File) => {
    //     if (maxFileSize && maxFileSize > 0 && file.size > maxFileSize) {
    //         return (
    //             <OverlayTrigger placement="top" overlay={renderTooltip}>
    //                 <span>{String.fromCharCode(9888)}</span>
    //             </OverlayTrigger>
    //         );
    //     }
    // }

    return (
        <>
            <Form.Control type="file" multiple onChange={handleOnChange} accept={accept} />
            <Table bordered striped hover className='text-center'>
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        {/* <th scope="col">Size</th> */}
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td key={i + ":#"}>{i + 1}</td>
                                <td>{item.name.slice(0, 40)}</td>
                                {/* <td>{item.size}</td> */}
                                <td>{item.type}</td>
                                <td>
                                    {/* {i > 0 ? (
                                        <Button
                                            key={i + ":up"}
                                            variant="light"
                                            onClick={() => handleUp(i)}
                                        >
                                            {String.fromCharCode(8593)}
                                        </Button>
                                    ) : null}
                                    {i < list.length - 1 ? (
                                        <Button
                                            key={i + ":down"}
                                            variant="light"
                                            onClick={() => handleDown(i)}
                                        >
                                            {String.fromCharCode(8595)}
                                        </Button>
                                    ) : null} */}
                                    {/* <CloseButton
                                        key={i + ":del"}
                                        onClick={() => }

                                    >Remove</CloseButton> */}
                                    <Button variant='danger' title='Remove' onClick={() => handleDelete(i)}>Delete</Button>
                                    {/* {validate(item)} */}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            {/* {renderFileInput()} */}
        </>
    );
};

export default FileUpload;
