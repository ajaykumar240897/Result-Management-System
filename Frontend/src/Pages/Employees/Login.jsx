import { Button, Form, Input } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex text-align:center justify-center mt-8 font-medium'>
                <Form layout='vertical w-80'>
                    <h1 className='text-xl mb-8 text-center font-bold'>Employee-Login</h1>
                    <Form.Item name='employeeId' label='Employee ID'>
                        <Input />
                    </Form.Item>
                    <Form.Item name='password' label='Password'>
                        <Input />
                    </Form.Item>
                    <Button className='font-bold w-80 bg-orange-600' onClick={() => {
            navigate('/employee');
          }}>Login</Button>
                    <div className='mt-3 text-center'>
                        <span className='text-sm'>Not have an account?<Link to='/register' className='text-orange-700'>SignUp</Link></span>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login