import React, { useState } from 'react';
import { Layout, Menu as AntdMenu, theme, MenuProps } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components';
import { AiOutlineFolder, AiOutlineFileText, AiOutlineLineChart } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { GiBrokenAxe } from 'react-icons/gi'
import { TbSettingsCog } from 'react-icons/tb'
import { MdLocationOn, MdAdminPanelSettings, MdOutlineDashboard, MdSystemUpdateAlt } from 'react-icons/md'
import { FaUser } from "react-icons/fa";
import Header from './Header';
import VMLogo from '../../../shared/assets/logo_horizontal.svg'
import Logo from '../../../shared/assets/logo.png'

const { Sider, Content } = Layout;

const App: React.FC = () => {
    const [breakpoint, setBreakpoint] = useState(window.innerWidth >= 768)
    const [collapsedWidth, setCollapsedWidth] = useState(window.innerWidth >= 768 ? 80 : 0)

    const [collapsed, setCollapsed] = useState(() => {
        const isCollapsed = localStorage.getItem('collapsed')
        if (isCollapsed != null) {
            return JSON.parse(isCollapsed)
        }
        return false
    })
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const onBreakpoint = () => {
        if (!breakpoint) {
            setCollapsedWidth(0)
            setCollapsed(true)
        } else {
            setCollapsedWidth(80)
        }
        setBreakpoint(!breakpoint)
    }

    const handleSelect = () => breakpoint && setCollapsed(true)

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* SIDEBAR */}
            <Sider trigger={null} collapsible collapsed={collapsed} width={280} breakpoint='md' collapsedWidth={collapsedWidth} onBreakpoint={onBreakpoint}>
                <div style={{ height: 64, padding: '.3rem', background: '#fff', display: 'grid', placeItems: 'center' }}>
                    {collapsed ?
                        <img src={Logo} alt="" className='brand-logo' style={{ width: 40 }} />
                        :
                        <img src={VMLogo} alt="" className='brand-logo' style={{ width: 100 }} />
                    }
                </div>
                <Sidebar handleSelect={handleSelect} />
            </Sider>
            <Layout >
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;

function Sidebar({ handleSelect }: { handleSelect: () => void }) {
    const { pathname } = useLocation()
    const [locationKey] = useState(() => {
        const location = pathname.split('/').filter(s => s !== '')[0]
        const paths: Record<string, string> = {
            'dashboard': '/dashboard',
            'swp': '/swp',
            'ogp': '/ogp',
            'pipelines': '/pipelines',
            'critical-equipment': '/critical-equipment',
            'location-settings': '/location-settings',
            'system-settings': '/system-settings',
            'admin-settings': '/admin-settings',
            'profile': '/profile',
        }
        return paths[location]
    })
    return <MenuContainer
        theme="dark"
        mode="inline"
        activeKey={pathname}
        defaultSelectedKeys={[locationKey]}
        onSelect={handleSelect}
        items={links}
    />
}

const MenuContainer = styled(AntdMenu)`
    height: 100%;
    background-color: #1e9aff;
    color: #fff;

    .ant-menu-item,
    .ant-menu-item:hover,
    .ant-menu.ant-menu-sub.ant-menu-inline {
        border-radius: 0 !important;
    }

    /* .ant-menu-item:hover, */
    .ant-menu-item-selected,
    .ant-menu-item.ant-menu-item-active {
        border-radius: 0;
        background-color: #f69a22;
        color: #fff;
    }
    .menu-item-icon {
        color: #00AEEF;
    }
`

type MenuItem = Required<MenuProps>['items'][number]

function getItemLinks(
    label: React.ReactNode,
    key: React.Key | string,
    icon?: React.ReactNode,
    children?: MenuItem[],
    hasMod: boolean = true
): MenuItem {
    return hasMod ? {
        key,
        icon,
        children,
        label,
    } as MenuItem : null;
}

const links = [
    getItemLinks(
        <Link className={`text-decoration-none`} to='/dashboard'>
            Dashboard
        </Link>,
        '/dashboard',
        <MdOutlineDashboard />,
        undefined,
        true
    ),
    getItemLinks(
        <Link className={`text-decoration-none`} to='/swp'>
            SWP
        </Link>,
        '/swp',
        <AiOutlineFolder />,
        undefined,
        true
    ),
    getItemLinks(
        <Link className={`text-decoration-none`} to='/ogp'>
            OGP
        </Link>,
        '/ogp',
        <AiOutlineFileText />,
        undefined,
        true
    ),
    getItemLinks(
        <Link className={`text-decoration-none`} to='/pipelines'>
            Pipelines
        </Link>,
        '/pipelines',
        <AiOutlineLineChart />,
        undefined,
        true
    ),
    getItemLinks(
        <Link className={`text-decoration-none`} to='/critical-equipment'>
            Critical Equipment
        </Link>,
        '/critical-equipment',
        <GiBrokenAxe />,
        undefined,
        true
    ),
    getItemLinks(
        'Location Settings',
        '/location-settings',
        <MdLocationOn />,
        [
            getItemLinks(
                <Link className={`text-decoration-none`} to='/location-settings/systems'>
                    Systems
                </Link>,
                '/location-settings/systems',
                <MdSystemUpdateAlt />,
                undefined,
                true
            ),
            getItemLinks(
                <Link className={`text-decoration-none`} to='/location-settings/equipments'>
                    Equipment
                </Link>,
                '/location-settings/equipments',
                <TbSettingsCog />,
                undefined,
                true
            ),
        ],
        true
    ),
    getItemLinks(
        <Link className={`text-decoration-none`} to='/system-settings/availability'>
            System Settings
        </Link>,
        '/system-settings',
        <FiSettings />,
        undefined,
        true
    ),
    getItemLinks(
        <Link className={`text-decoration-none`} to='/admin-settings/location'>
            Admin Settings
        </Link>,
        '/admin-settings',
        <MdAdminPanelSettings />,
        undefined,
        true
    ),
    getItemLinks(
        <Link className={`text-decoration-none`} to='/profile'>
            Profile
        </Link>,
        '/profile',
        <FaUser />,
        undefined,
        true
    ),
]
