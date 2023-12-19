import { useState, useEffect } from 'react'
import { Card, Col, Row, Select, Switch } from 'antd'
import { useNavigate } from 'react-router-dom';
import { useAuthUser } from '../../../shared/contexts/AuthUser';

import { GET, PUT } from '../../../shared/utils/fetch'

export default function Permission() {
    const [selectedRoleId, setSelectedRoleId] = useState<string | undefined>(undefined);

    return (
        <div>
            <h3 className='text-color-gray mb-2'>Permissions</h3>
            <Roles
                selectedRoleId={selectedRoleId}
                setSelectedRoleId={setSelectedRoleId}
            />
            <Row gutter={[12, 12]} wrap>
                <PermissionLists selectedRoleId={selectedRoleId} />
            </Row>
        </div>
    )
}

function Roles({ selectedRoleId, setSelectedRoleId }: { selectedRoleId?: string; setSelectedRoleId: React.Dispatch<React.SetStateAction<string | undefined>>; }) {
    const [roles, setRoles] = useState<TRoles[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const res = await GET<ApiSuccess<TRoles[]>>('/roles', controller.signal)
                setRoles(res.data.data ?? [])
            } catch (error) {
                return error
            }
        })();
        return () => controller.abort()
    }, [])

    return <Col className='mb-3'>
        <Select placeholder='Select Roles' optionFilterProp="children" showSearch allowClear style={{ width: 200 }} value={selectedRoleId!} onChange={setSelectedRoleId}>
            {roles.map((stat) => (
                <Select.Option value={stat.id} key={stat.id}>
                    {stat.name}
                </Select.Option>
            ))}
        </Select>
    </Col>
}

function PermissionLists({ selectedRoleId }: { selectedRoleId?: string }) {
    const { fetchUserData, mapPermission } = useAuthUser()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [permissions, setDataSource] = useState<TPermissions | undefined>()
    const [roles, setRoles] = useState<TRoles | undefined>(undefined);
    const permissionByRoles = new Map(roles?.permissions?.map((p) => [p.id, p]))


    useEffect(() => {
        const controller = new AbortController();
        fetchPermissions({ signal: controller.signal })
        return () => controller.abort()
    }, [])

    useEffect(() => {
        if (!selectedRoleId) return
        fetchRoles(selectedRoleId)
    }, [selectedRoleId])

    if (!loading && !mapPermission.has('Permissions Management - view list')) {
        navigate(-1)
        return null
    }

    async function fetchPermissions(args?: ApiParams) {
        setLoading(true)
        const { signal, ...restArgs } = args ?? {};
        try {
            const res = await GET<ApiData<TPermissions>>('/permissions/options', signal!, restArgs)
            setDataSource(res.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    async function fetchRoles(roleId: string) {
        setLoading(true)
        try {
            const res = await GET<ApiData<TRoles>>('/roles/' + roleId)
            setRoles(res.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    const onChange = async (checked: boolean, permission: TPermission) => {
        if (!selectedRoleId) return
        setLoading(true)
        try {
            await PUT<{ id: string; role_id: string; permission?: TPermission }>('/roles/permission/' + selectedRoleId, { id: permission.id, role_id: selectedRoleId!, ...(!checked ? { permission: permission } : undefined) })
        } catch (error) {
            return error
        } finally {
            setLoading(false)
            fetchRoles(selectedRoleId!)
            fetchUserData(undefined)
        }
    }

    return Object.entries(permissions ?? {}).map(([k, v]) => (
        <Col xs={24} sm={12} md={12} lg={12} xl={8} key={k}>
            <Card title={k} loading={loading} style={{ pointerEvents: !selectedRoleId ? 'none' : 'initial', opacity: !selectedRoleId ? .5 : 1 }}>
                {v.map((p) => (
                    <div className='d-flex justify-content-between' key={p.id}>
                        <p>{p.description}</p>
                        <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked checked={permissionByRoles.has(p.id)} onChange={checked => onChange(checked, p)} />
                    </div>
                ))}
            </Card>
        </Col>
    ))
}