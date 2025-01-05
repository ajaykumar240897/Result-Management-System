import React from 'react'
import Layout from '../../components/Layout'
import { Row, Col } from "antd"
import { useNavigate } from "react-router-dom"

function EmployeeHome() {
  const navigate = useNavigate();
  return (
    <Layout>
      {/*p-3 shadow-md shadow-indigo-700 rounded-md mt-2 */}
      <div className='bg-gradient-to-r from-orange-500 to-sky-400 cursor-pointer' onClick={() => {
                    navigate(-1)
                }}><i className="ri-arrow-left-line"></i></div>
      <div className='flex justify-center place-items-center bg-gradient-to-r from-orange-500 to-sky-400 h-screen'>
        <Row gutter={20,20}>
          <Col span={12}>
            <div className='p-5 border-4 border-purple-700 font-medium text-black bg-yellow-300 text-lg rounded-md cursor-pointer' onClick={() => {
              navigate("/employee/students")
            }}>
              <img src="https://cdn-icons-png.flaticon.com/128/10156/10156019.png" height={100} width={100} />
              <h1>Students</h1>
            </div>
          </Col>
          <Col span={12}>
            <div className='p-5 border-4 border-purple-700 font-medium text-black bg-yellow-300  text-lg rounded-md cursor-pointer' onClick={() => {
              navigate("/employee/results")
            }}>
              <img src="https://cdn-icons-png.flaticon.com/128/14/14265.png" height={100} width={100}/>
              <h1>Results</h1>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default EmployeeHome