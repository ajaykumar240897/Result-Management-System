import React from 'react'
import PageTitle from '../../components/PageTitle'
import Layout from '../../components/Layout'
import { useNavigate } from 'react-router-dom'
import StudentForm from '../../components/StudentForm';

function AddStudent() {
    const navigate = useNavigate();
    return (
        <Layout>
            <div className='mt-3 text-lg px-2 font-bold'>
                <PageTitle title='Add Student' />
                <StudentForm />
            </div>
        </Layout>
    )
}

export default AddStudent