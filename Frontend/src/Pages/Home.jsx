import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
  return (
    <div className='mr-3 ml-3 bg-gradient-to-r from-green-400 to-purple-700 h-screen rounded-md'>
      <div className="flex text-align:center justify-between bg-purple-700 mt-2 rounded-t-md">
        <h1 className='flex font-bold text-yellow-300 p-2 gap-2'><img src="https://cdn-icons-png.flaticon.com/128/17859/17859826.png" height={20} width={40} />FIND <b className='text-red-500'>RESULTS</b></h1>
        <div className='flex justify-end mt-3 mr-3 gap-2'>
          <Button className='font-bold bg-red-500 border-red-500' onClick={() => {
            navigate('/register');
          }}>SignUp</Button>
          <Button className='font-bold bg-green-400 border-green-400' onClick={() => {
            navigate('/login');
          }}>Login</Button>
        </div>
      </div>

      <br />
      <div className='flex justify-center mt-5'>
        {/*<input type="text" className='w-80 mt-3 rounded-md px-3' placeholder='Enter Your Examination Name Here...' />*/}
        <Button className='font-bold w-80 bg-orange-600 border-orange-600' onClick={() => {
          navigate('/result/resultid');
        }}>MCA Result</Button>
      </div>
      <div className='flex justify-center mt-4'>
        <Button className='font-bold w-80 bg-orange-600 border-orange-600' onClick={() => {
          navigate('/result/resultid');
        }}>BCA Result</Button>
      </div>
      <div className='flex justify-center mt-4'>
        <Button className='font-bold w-80 bg-orange-600 border-orange-600' onClick={() => {
          navigate('/result/resultid');
        }}>MBA Result</Button>
      </div>
      <div className='flex justify-center mt-4'>
        <Button className='font-bold w-80 bg-orange-600 border-orange-600' onClick={() => {
          navigate('/result/resultid');
        }}>BBA Result</Button>
      </div>
      <div className='flex justify-center mt-4'>
        <Button className='font-bold w-80 bg-orange-600 border-orange-600' onClick={() => {
          navigate('/result/resultid');
        }}>B.Tech Result</Button>
      
      </div>
    </div>
  );
}

export default Home