import { useEffect, createElement } from 'react'
import { Layout, Dropdown, Space, MenuProps, Row } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { useAuthUser } from '../../../shared/contexts/AuthUser'
import { useAuthToken } from '../../../shared/contexts/AuthToken'

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
                <h4 className={`m-0 fs-6`}>
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
    const { token } = useAuthToken()
    const { user, setUser } = useAuthUser()

    useEffect(() => {
        const controller = new AbortController();
        if (!user) {
            (async () => {
                try {
                    const res = await fetch(`/auth_user`, { signal: controller.signal, headers: { Authorization: `Bearer ${token}` } })
                    const data = await res.json()
                    console.log(data)
                    return data
                } catch (error) {
                    return error
                }
            })()
        }
        return () => {
            controller.abort()
        }
    }, [user])

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


    function logout(evt: React.MouseEvent) {
        evt.stopPropagation()
        evt.preventDefault()
        // GET(LOGOUT)
        //     .then(() => {
        //         localStorage.clear()
        //         setUser(undefined)
        //         setToken(undefined)
        //     })
    }

    return <Dropdown menu={{ items }}>
        <a onClick={e => e.preventDefault()}>
            <Space>
                <UserName>{'ADMINISTRATOR'}</UserName>
                <FiSettings />
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