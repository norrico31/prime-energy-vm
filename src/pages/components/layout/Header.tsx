import { createElement, useEffect, useState } from 'react'
import { Layout, Dropdown, Space, MenuProps, Row } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Link, Navigate } from 'react-router-dom'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useAuthUser } from '../../../shared/contexts/AuthUser'

const { Header: AntDHeader } = Layout

type Props = {
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ collapsed, setCollapsed }: Props) {
    const toggle = () => {
        const isCollapsed = !collapsed
        setCollapsed(isCollapsed)
        localStorage.setItem('isCollapsed', JSON.stringify(collapsed))
    }

    const burgerMenu = createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
        style: { fontSize: 20 }
    })

    return (
        <Container style={{ background: '#fff', paddingInline: 20 }}>
            <div className='d-flex align-items-center gap-2'>
                {burgerMenu}
                <h4 className={`m-0 fs-6`} style={{ fontSize: '1.1rem' }}>
                    Vulnerability Monitoring System
                </h4>
            </div>
            <div >
                <Row align='middle' style={{ gap: 10 }}>
                    <UserSettings />
                </Row>
            </div>
        </Container>
    )
}

function UserSettings() {
    const { user, token, fetchUserData, logout } = useAuthUser()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        fetchUserData(controller.signal)
        setLoading(false)
        return () => controller.abort()
    }, [])

    if (!loading && !token) return <Navigate to='/login' />;

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <Link to='/profile' className='text-decoration-none'>Profile</Link>,
        },
        {
            key: '2',
            label: (
                <div onClick={logout}>
                    Logout
                </div>
            ),
        },
    ]

    return <Dropdown menu={{ items }}>
        <a onClick={e => e.preventDefault()}>
            <Space>
                <UserName>{user?.full_name}</UserName>
                <IoMdArrowDropdown style={{ fontSize: 30 }} />
            </Space>
        </a>
    </Dropdown>
}

const UserName = styled.span`
    color: #45464B;
    font-weight: 500;
    font-size: 16px;
`

const Container = styled(AntDHeader)`
    background: '#fff'  !important;

    padding: 0;
    display: flex;
    justify-content: space-between;

`