import { Button, Input, Form, Col } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
import Logo from '../shared/assets/logo.png'
import LoginBG from '../shared/assets/loginbg.png'
import styled from 'styled-components';

type Form = {
    email: string; password: string
}

const { useForm } = Form

function Login() {
    const [form] = useForm<Form>();

    const onFinish = async (values: Form) => {
        console.log('Finish:', values);
        try {
            const res = await fetch('https://vms.redcoresolutions.com/passthru/api/v1/login', {
                method: 'POST',
                body: JSON.stringify({
                    ...form.getFieldsValue()
                })
            })
            const data = await res.json()

            return data
        } catch (error) {
            console.log(error)
            return error
        }
    }

    return (
        <Container fluid className='login-container p-0'>
            <Form form={form} name="horizontal_login" onFinish={onFinish} className='px-3'>
                <Col xs={24} sm={24} md={24} lg={24} className='d-flex align-items-center flex-column justify-content-center h-100 text-center'>
                    <img src={Logo} alt='brand-logo' style={{ width: 60 }} />
                    <h5 className='m-4'>Vulnerability Monitoring System</h5>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!', min: 5 }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!', min: 4 }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            >
                                Log in
                            </Button>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Login with SSO with microsoft
                        </Button>
                    </Form.Item>
                </Col>
            </Form>

            <div className='login-bg-container'>
                <p>Welcome to Prime Energy</p>
                <h5>Building the infrastructure for a better future</h5>
            </div>
        </Container >
    )
}

export default Login