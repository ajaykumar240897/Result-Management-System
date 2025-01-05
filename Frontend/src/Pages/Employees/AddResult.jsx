import React from 'react'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import ResultForm from '../../components/ResultForm'

function AddResult() {
  return (
    <Layout>
    <div className='mt-3 text-lg px-2'>
        <PageTitle title="Add Result"/>
        <ResultForm/>
    </div>
    </Layout>
  )
}

export default AddResult