import { Button, Col, Form, Row } from 'antd'
import React from 'react'

function StudentForm() {

  return (
    <div>
      <Form className='font-medium pl-10'>
        <Row>
          <Col span={8}>
            <Form.Item label="First Name" name='firstName' />
            <input type="text" className='px-2 rounded-md' />
            <Form.Item />
          </Col>
          <Col span={8}>
            <Form.Item label="Last Name" name='lastName' />
            <input type="text" className='px-2 rounded-md' />
            <Form.Item />
          </Col>
          <Col span={8}>
            <Form.Item label="Roll Number" name='rollNumber' />
            <input type="number" className='px-2 rounded-md' />
            <Form.Item />
          </Col>
          <Col span={8}>
            <Form.Item label="Email" name='email' />
            <input type="text" className='px-2 rounded-md' />
            <Form.Item />
          </Col>
          <Col span={8}>
            <Form.Item label="Phone Number" name='phoneNumber' />
            <input type="number" className='px-2 rounded-md' />
            <Form.Item />
          </Col>
          <Col span={8}>
            <Form.Item label="Standard" name='standard' />
            <input type="number" className='px-2 rounded-md' />
            <Form.Item />
          </Col>
        </Row>
        <div className='flex justify-center'>
          <Button className='font-bold w-40 bg-orange-600'>Submit</Button>
        </div>

      </Form>
    </div>
  )
}

export default StudentForm