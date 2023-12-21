import React, { useState } from 'react';
import { Layout, Menu as AntdMenu, theme, MenuProps } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components';
import { useAuthUser } from '../../../shared/contexts/AuthUser'
import { FiSettings } from 'react-icons/fi'
import { TbSettingsCog } from 'react-icons/tb'
import { MdLocationOn, MdAdminPanelSettings, MdOutlineDashboard, MdSystemUpdateAlt } from 'react-icons/md'
import { FaUser } from "react-icons/fa";
import Header from './Header';
import VMLogo from '../../../shared/assets/logo_horizontal.svg'
import Logo from '../../../shared/assets/logo.png'
import SwpIconAsPng from '../../../shared/assets/icons/SWP.png'
import OGPIconAsPng from '../../../shared/assets/icons/OGP.png'
import PipelinesIconAsPng from '../../../shared/assets/icons/Pipeline.png'
import CriticalIconAsPng from '../../../shared/assets/icons/equipment.png'

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
    const { mapPermission } = useAuthUser()
    const { pathname } = useLocation()
    const [locationKey] = useState(() => {
        const location = pathname.split('/').filter(s => s !== '')[0]
        const paths: Record<string, string> = {
            'dashboard': '/dashboard',
            'owner-dashboard': '/owner-dashboard',
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
        items={renderLinks(mapPermission)}
    />
}

const MenuContainer = styled(AntdMenu)`
    height: 100%;
    background-color: #1e9aff;
    color: #fff;

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

function Icon({ src }: { src: string }) {
    return <img src={src} alt='swp icon' style={{ width: 24, height: 24, filter: '100%', paddingRight: 10 }} />
}

const renderLinks = (permissions: Map<string, TPermission>) => {
    const hasSystemsLocationSettings = permissions.has('Systems Management - Allow View List')
    const hasEquipmentsLocationSettings = permissions.has('Equipments Management - Allow View List')
    const hasAvailabilitySystemSettings = permissions.has('Availability Management - Allow View List')
    const hasIntegritySystemSettings = permissions.has('Integrity Management - Allow View List')
    const hasStatusSystemSettings = permissions.has('Status Management - Allow View List')

    const hasSitesAdminSettings = permissions.has('Sites Management - Allow View List')
    const hasUsersAdminSettings = permissions.has('Users Management - Allow View List')
    const hasRolesAdminSettings = permissions.has('Roles Management - Allow View List')
    const hasPermissionsAdminSettings = permissions.has('Permissions Management - Allow View List')
    const hasAuditAdminSettings = permissions.has('Audit Management - Allow View List')
    console.log(permissions.values())
    return [
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
            <Link className={`text-decoration-none`} to='/owner-dashboard'>
                Owner Dashoard
            </Link>,
            '/owner-dashboard',
            <MdOutlineDashboard />,
            undefined,
            true
        ),
        getItemLinks(
            <Link className={`text-decoration-none`} to='/swp'>
                SWP
            </Link>,
            '/swp',
            <Icon src={SwpIconAsPng} />,
            undefined,
            true
        ),
        getItemLinks(
            <Link className={`text-decoration-none`} to='/ogp'>
                OGP
            </Link>,
            '/ogp',
            <Icon src={OGPIconAsPng} />,
            undefined,
            true
        ),
        getItemLinks(
            <Link className={`text-decoration-none`} to='/pipelines'>
                Pipelines
            </Link>,
            '/pipelines',
            <Icon src={PipelinesIconAsPng} />,
            undefined,
            true
        ),
        getItemLinks(
            <Link className={`text-decoration-none`} to='/critical-equipment'>
                Critical Equipment
            </Link>,
            '/critical-equipment',
            <Icon src={CriticalIconAsPng} />,
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
                    hasSystemsLocationSettings
                ),
                getItemLinks(
                    <Link className={`text-decoration-none`} to='/location-settings/equipments'>
                        Equipment
                    </Link>,
                    '/location-settings/equipments',
                    <TbSettingsCog />,
                    undefined,
                    hasEquipmentsLocationSettings
                ),
            ],
            hasSystemsLocationSettings || hasEquipmentsLocationSettings
        ),
        getItemLinks(
            <Link className={`text-decoration-none`} to='/system-settings/availability'>
                System Settings
            </Link>,
            '/system-settings',
            <FiSettings />,
            undefined,
            hasAvailabilitySystemSettings ||
            hasIntegritySystemSettings ||
            hasStatusSystemSettings
        ),
        getItemLinks(
            <Link className={`text-decoration-none`} to='/admin-settings/location'>
                Admin Settings
            </Link>,
            '/admin-settings',
            <MdAdminPanelSettings />,
            undefined,
            hasUsersAdminSettings || hasRolesAdminSettings ||
            hasPermissionsAdminSettings || hasAuditAdminSettings || hasSitesAdminSettings
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
}
