import { useEffect, useState } from "react";
import { Card, Col, Form, Input, Row } from "antd";
import { useAuthUser } from "../shared/contexts/AuthUser";
import { Button } from "./components";
import { POST } from '../shared/utils/fetch'

const { useForm, Item } = Form

type Payload = {
    current_password: string
    email: string
    first_name: string
    last_name: string
    password: string
    password_confirmation: string
    position: string | null
}

export default function Profile() {
    const { user, setUser } = useAuthUser()
    const [form] = useForm<Payload>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        form.setFieldsValue({ ...user })
    }, []);

    const onFinish = async (val: Payload) => {
        setLoading(true)
        try {
            const res = await POST<Payload, ApiData<TUser>>('/profile', val)
            setUser(res.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    return <Card title='Profile'>
        <Form form={form} onFinish={onFinish} disabled={loading} labelCol={{ span: 10 }} wrapperCol={{ span: 13 }}>
            <Row justify='space-between'>
                <Col xs={24} sm={24} md={11} lg={10} xl={10} >
                    <Item
                        label="First Name"
                        name="first_name"
                    >
                        <Input placeholder='Enter first name...' disabled />
                    </Item>
                </Col>
                <Col xs={24} sm={24} md={11} lg={10} xl={10} >
                    <Item
                        label="Email"
                        name="email"
                    >
                        <Input type='email' placeholder='Enter email...' disabled />
                    </Item>
                </Col>
                <Col xs={24} sm={24} md={11} lg={10} xl={10} >
                    <Item
                        label="Last Name"
                        name="last_name"
                    >
                        <Input placeholder='Enter last name...' disabled />
                    </Item>
                </Col>
                {/* <Col xs={24} sm={24} md={11} lg={10} xl={10} >
                    <Item
                        label="Position"
                        name="position" // to be change
                    >
                        <Input placeholder='N/A' disabled />
                    </Item>
                </Col> */}
            </Row>
            <hr />
            <Row justify="space-between">
                <Col xs={24} sm={24} md={13} lg={10} xl={10}>
                    <Item label="Current Password" name="current_password">
                        <Input type="password" placeholder="Current password" />
                    </Item>
                </Col>
            </Row>
            <Row justify="space-between">
                <Col xs={24} sm={24} md={13} lg={10} xl={10}>
                    <Item label="New Password" name="password">
                        <Input type="password" placeholder="New password" />
                    </Item>
                </Col>
                <Col xs={24} sm={24} md={13} lg={10} xl={10}>
                    <Item label="Confirm Password" name="password_confirmation">
                        <Input type="password" placeholder="Confirm password" />
                    </Item>
                </Col>
            </Row>
            <Row justify='end'>
                <Button type='submit' variant="primary">Update</Button>
            </Row>
        </Form>
    </Card >
}
