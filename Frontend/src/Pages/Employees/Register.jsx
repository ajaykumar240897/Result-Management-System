import React from 'react';
import { Form, Input } from 'antd';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  return (
    
    <div className='bg-red-400 h-screen'>
      <div className='flex text-align:center justify-center font-medium'>
      <Form layout='vertical w-80'>
      <h1 className='text-xl mb-8 mt-4 text-center font-bold'>Employee-SignUp</h1>
        <Form.Item name='employeeId' label='Employee ID'>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='Password'>
          <Input />
        </Form.Item>
        <Form.Item name='confirmPassword' label='Confirm Password'>
          <Input />
        </Form.Item>
        <Button className='font-bold w-80 bg-orange-600 border-orange-600' onClick={() => {
            navigate('/login');
          }}>SignUp</Button>
        <div className='mt-3 text-center'>
        <span className='text-sm'>Already have an account?<Link to='/login' className='text-orange-700 font-bold'>Login </Link></span>
        </div>
      </Form>
      
      </div>
    </div>
  );
}

export default Register;