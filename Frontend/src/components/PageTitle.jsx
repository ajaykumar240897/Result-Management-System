import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageTitle({title}) {
  const navigate=useNavigate();
  return (
    <div className='flex gap-3'>
      <i className="ri-arrow-go-back-line cursor-pointer" onClick={()=>{
        navigate(-1)
      }}></i>
        <h1>{title}</h1>
        <hr />
    </div>
  )
}

export default PageTitle