import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ResultInfo() {
    const navigate=useNavigate();
    return (
        <div className='mr-3 ml-3'>
            <div className="flex text-align:center justify-between bg-purple-700 mt-2 rounded-md">
                <h1 className='flex font-bold text-yellow-300 p-2'><img src="https://cdn-icons-png.flaticon.com/128/17859/17859826.png" height={20} width={40} />FIND <b className='text-red-500'>RESULTS</b></h1>
            </div>
            <div className='mt-1'>
                <i className="ri-arrow-go-back-line cursor-pointer" onClick={() => {
                    navigate(-1)
                }}></i>
            </div>
            <div className='pl-8 mt-2 font-normal'>
                <h1 className='' >Name of Student:</h1>
                <h1 className='mt-2'>Standard:</h1>
                <h1 className='mt-2'>Roll Number:</h1>
                <h1 className='mt-2'>College/School Name:</h1>
            </div>
            <div>
                <table className="ml-3 mt-5 mb-4 table-fixed">
                    <thead className='bg-slate-300'>
                        <tr>
                            <th className="w-1/2 border px-4 py-2">Subject</th>
                            <th className="w-1/4 border px-4 py-2">Total Marks</th>
                            <th className="w-1/4 border px-4 py-2">Obtained Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Intro to CSS</td>
                            <td className="border px-4 py-2">100</td>
                            <td className="border px-4 py-2">85</td>
                        </tr>
                        <tr class="bg-gray-100">
                            <td className="border px-4 py-2">Intro to HTML</td>
                            <td className="border px-4 py-2">100</td>
                            <td className="border px-4 py-2">90</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Intro to JavaScript</td>
                            <td className="border px-4 py-2">100</td>
                            <td className="border px-4 py-2">80</td>
                        </tr>
                    </tbody>
                </table>
                <div className='pl-8 mt-5 font-medium'>Result: <b className='font-normal'>(Marks)</b></div>
                <div className='pl-8 mt-5 font-medium'>Devision: <b className='font-normal'></b></div>

            </div>
            <div className='flex justify-center mt-4'>
                <Button className='font-bold w-80 bg-orange-600'>Print your result</Button>
            </div>
        </div>
    )
}

export default ResultInfo