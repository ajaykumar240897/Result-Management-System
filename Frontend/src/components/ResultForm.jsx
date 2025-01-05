import { Button, Col, Form, Row, Space } from 'antd'
import React from 'react'

function ResultForm() {
    return (
        <div>
            <Form className='font-medium pl-10'>
                <Row>
                    <Col span={8}>
                        <Form.Item label="Examination" name='examination' />
                        <input type="text" className='px-2 rounded-md' />
                        <Form.Item />
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Date" name='date' />
                        <input type="date" className='px-2 rounded-md' />
                        <Form.Item />
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Standard" name='standard' />
                        <input type="number" className='px-2 rounded-md' />
                        <Form.Item />
                    </Col>

                </Row>
                <Form.List name="subjects">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    style={{
                                        display: 'flex',
                                        marginBottom: 8,
                                    }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'subjectName']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Required',
                                            },
                                        ]}
                                    >
                                        <input placeholder="Subject Name" className='px-2 rounded-md' />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'totalMarks']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Required',
                                            },
                                        ]}
                                    >
                                        <input placeholder="Total Marks" className='px-2 rounded-md'/>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'passingMarks']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Required',
                                            },
                                        ]}
                                    >
                                        <input placeholder="Passing Marks" className='px-2 rounded-md'/>
                                    </Form.Item>
                                    <Button onClick={() => remove(name)} >Remove</Button>
                                    
                                </Space>
                            ))}
                            
                                <Button onClick={() => add()} className='font-medium bg-sky-500 underline'>
                                    Add Subject
                                </Button>
                           
                        </>
                    )}
                </Form.List>
                <div className='flex justify-center mt-10'>
                    <Button className='font-bold w-40 bg-orange-600'>Save</Button>
                </div>
            </Form>
        </div>
    )
}

export default ResultForm