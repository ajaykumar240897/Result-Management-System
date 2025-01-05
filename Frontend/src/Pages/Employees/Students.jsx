import React from 'react'
import PageTitle from '../../components/PageTitle'
import Layout from '../../components/Layout'
import { useNavigate } from 'react-router-dom'
import { Table } from 'antd';

function Students() {
  const navigate = useNavigate();
  const columns = [
    {
      title: 'Roll Number',
      dataIndex: 'rollNumber',
      key: 'rollNumber',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div className='flex gap-3 cursor-pointer'>
          <i className="ri-delete-bin-line"></i>
          <i className="ri-pencil-line"></i>
        </div>
      )
    }

  ]
  return (
    <Layout>
      <div className='mt-3 text-lg px-2'>
        <PageTitle title='Edit Students' />
        <div className='flex justify-between items-center'>
          <input type="text" className='w-30 mt-3 rounded-md px-3' placeholder='Search Students' />
          <button className='font-medium w-30 bg-green-600 px-3 text-white rounded-md' onClick={() => {
            navigate('/employee/students/add');
          }}>Upload only Excelsheet</button>
          <button className='font-bold w-40 bg-orange-600 px-3 text-white rounded-md' onClick={() => {
            navigate('/employee/students/add');
          }}>Add Students</button>
        </div>
        <Table columns={columns} />
      </div>
    </Layout>
  )
}

export default Students