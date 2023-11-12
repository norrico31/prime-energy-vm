import React, { useState } from 'react';
import { Layout, Menu as AntdMenu, theme, MenuProps } from 'antd';
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { AiOutlineFolder, AiOutlineFileText, AiOutlineLineChart } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { GiBrokenAxe } from 'react-icons/gi'
import { TbSettingsCog } from 'react-icons/tb'
import { MdLocationOn, MdAdminPanelSettings, MdOutlineDashboard, MdSystemUpdateAlt } from 'react-icons/md'
import Header from './Header';
import VMLogo from '../../../shared/assets/logo_horizontal.svg'
import Logo from '../../../shared/assets/logo.png'
import styled from 'styled-components';

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
                        <img src={Logo} alt="" className='brand-logo' style={{ width: 50 }} />
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
    
  
    /* .menu-item-main.active, .menu-item-main.active > * {
        color: #9B3423 !important;
    }
    */
    .ant-menu-title-content a {
        display: block;
    }
    .ant-menu-item-selected,
    .ant-menu-item.ant-menu-item-active {
        background-color: #fff;
        color: #000;
    }
    .menu-item-icon {
        color: #00AEEF;
    }
    /* .ant-menu.ant-menu-sub.ant-menu-inline {
        background: #9B3423;
    } */
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
        <NavLink className={`d-flex align-items-center gap-3 fs-5 text-decoration-none`} to='/dashboard'>
            Dashboard
        </NavLink>,
        '/dashboard',
        <MdOutlineDashboard className='fs-4' />,
        undefined,
        true
    ),
    getItemLinks(
        <NavLink className={`d-flex align-items-center gap-3 fs-5 text-decoration-none`} to='/swp'>
            SWP
        </NavLink>,
        '/swp',
        <AiOutlineFolder className='fs-4' />,
        undefined,
        true
    ),
    getItemLinks(
        <NavLink className={`d-flex align-items-center gap-3 fs-5 text-decoration-none`} to='/ogp'>
            OGP
        </NavLink>,
        '/ogp',
        <AiOutlineFileText className='fs-4' />,
        undefined,
        true
    ),
    getItemLinks(
        <NavLink className={`d-flex align-items-center gap-3 fs-5 text-decoration-none`} to='/pipelines'>
            Pipelines
        </NavLink>,
        '/pipelines',
        <AiOutlineLineChart className='fs-4' />,
        undefined,
        true
    ),
    getItemLinks(
        <NavLink className={`d-flex align-items-center gap-3 fs-5 text-decoration-none`} to='/critical-equipment'>
            Critical Equipment
        </NavLink>,
        '/critical-equipment',
        <GiBrokenAxe className='fs-4' />,
        undefined,
        true
    ),
    getItemLinks(
        'Location Settings',
        '/location-settings',
        <MdLocationOn className='fs-4' />,
        [
            getItemLinks(
                <NavLink className={`d-flex align-items-center gap-3 fs-5 text-decoration-none`} to='/location-settings/systems'>
                    Systems
                </NavLink>,
                '/location-settings/systems',
                <MdSystemUpdateAlt className='fs-4' />,
                undefined,
                true
            ),
            getItemLinks(
                <NavLink className={`d-flex align-items-center gap-3 fs-5 text-decoration-none`} to='/location-settings/equipments'>
                    Equipments
                </NavLink>,
                '/location-settings/equipments',
                <TbSettingsCog className='fs-4' />,
                undefined,
                true
            ),
        ],
        true
    ),
    getItemLinks(
        <NavLink className={`d-flex align-items-center gap-3 fs-5 text-decoration-none`} to='/system-settings/phase'>
            System Settings
        </NavLink>,
        '/system-settings',
        <FiSettings className='fs-4' />,
        undefined,
        true
    ),
    getItemLinks(
        <NavLink className={`d-flex align-items-center gap-3 fs-5 text-decoration-none`} to='/admin-settings/location'>
            Admin Settings
        </NavLink>,
        '/admin-settings',
        <MdAdminPanelSettings className='fs-4' />,
        undefined,
        true
    ),
]
