import { Card, List, Switch } from 'antd'
import React from 'react'

const data = [
    {
        title: 'Dashboard',
    },
    {
        title: 'Users Management',
    },

]

export default function Permission() {
    return (
        <div>
            <h3 className='text-color-gray mb-2'>Permissions</h3>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>
                            <div className='d-flex justify-content-between'>
                                <p>Create</p>
                                <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Edit</p>
                                <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Delete</p>
                                <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>View</p>
                                <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
                            </div>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    )
}
