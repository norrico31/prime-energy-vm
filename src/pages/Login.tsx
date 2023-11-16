import { useState } from 'react'
import { Button, Input, Form, Col, Row } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
import Logo from '../shared/assets/logo.png'
import { useAuthToken } from '../shared/contexts/AuthToken';
import { Link, Navigate } from 'react-router-dom';

type Form = {
    email: string; password: string
}
import { POST } from '../shared/utils/fetch'

const { useForm } = Form

function Login() {
    const [form] = useForm<Form>()
    const [errors, setErrors] = useState<Array<string>>([])
    const { token, setToken } = useAuthToken()

    if (token) return <Navigate to='/dashboard/critical-equipment' />

    const onFinish = async (values: Form) => {
        setErrors([])
        try {
            const data = await POST<Form, TCredentials>('/login', values)
            localStorage.setItem('token', JSON.stringify(data.data.token))
            setToken(data.data.token)
            return data
        } catch (err) {
            const error = err as ApiError
            setErrors(error?.errors.invalid_user_name_or_password as Array<string>)
            return err
        }
    }

    return (
        <Container fluid className='login-container p-0'>
            <Form form={form} onFinish={onFinish} className='px-3'>
                <Col xs={24} sm={24} md={24} lg={24} className='d-flex align-items-center flex-column justify-content-center h-100 text-center'>
                    <img src={Logo} alt='brand-logo' style={{ width: 60 }} />
                    <h5 className='m-4'>Vulnerability Monitoring System</h5>
                    <span className='error-text'>{errors[0]}</span>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: '', min: 5 }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '', min: 4 }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Row justify='end'>
                        {/* ENDPOINT FOR FORGOT PASSWORD */}
                        <Link to='/login/forgot-password'>Forgot Password</Link>
                    </Row>
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