import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ResultCheck() {
    const navigate = useNavigate();
    return (
        <div className='mr-3 ml-3'>
            <div className="flex text-align:center justify-between bg-purple-700 mt-2 rounded-md">
                <h1 className='flex font-bold text-yellow-300 p-2'><img src="https://cdn-icons-png.flaticon.com/128/17859/17859826.png" height={20} width={40}/>FIND <b className='text-red-500'>RESULTS</b></h1>
            </div>
            <div className='mt-1'>
                <i className="ri-arrow-go-back-line cursor-pointer" onClick={() => {
                    navigate(-1)
                }}></i>
            </div>
            <div className='pl-8 mt-2 font-normal'>
                <h1 className='' >Name of Examination:</h1>
                <h1 className='mt-2'>Standard:</h1>
                <h1 className='mt-2'>Date:</h1>
            </div>
            <div className='pl-8 mt-5 font-normal'>
                <input type="text" placeholder='Roll Number' className='rounded-md px-2' />
                <Button className='font-bold w-30 bg-orange-600 ml-3'onClick={() => {
            navigate('/result/resultid/resultinfo');
          }}>Get Result</Button>
            </div>
        </div>
    )
}

export default ResultCheck