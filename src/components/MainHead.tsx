import { useNavigate } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import { AiOutlineFolderAdd } from "react-icons/ai"
import { Button } from "."

function MainHead({ to }: { to: string }) {
    const navigate = useNavigate()
    return <Row>
        <Col className='p-0 mb-2'>
            <Button variant='success' className='d-flex gap-1 align-items-center' title='Create' onClick={() => navigate(to)}>
                <AiOutlineFolderAdd className='fs-5' />
                Create
            </Button>
        </Col>
    </Row>
}

export default MainHead