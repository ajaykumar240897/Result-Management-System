import React from 'react'
import PageTitle from '../../components/PageTitle'
import Layout from '../../components/Layout'
import { useNavigate } from 'react-router-dom'
import { Table } from 'antd';

function Results() {
  const navigate = useNavigate();
  const columns = [
    {
        title: 'Examination',
        dataIndex: 'examination',
        key: 'examination',
      },
    {
      title: 'Standard',
      dataIndex: 'standard',
      key: 'standard',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
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
        <PageTitle title='Edit Results' />
        <div className='flex justify-between items-center'>
          <input type="text" className='w-30 mt-3 rounded-md px-3' placeholder='Search Results' />
          <button className='font-bold w-40 bg-orange-600 px-3 text-white rounded-md' onClick={() => {
            navigate('/employee/Results/add');
          }}>Add Results</button>
        </div>
        <Table columns={columns} />
      </div>
    </Layout>
  )
}

export default Results