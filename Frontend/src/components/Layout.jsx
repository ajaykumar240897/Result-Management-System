import React from 'react'

function Layout(props) {
    return (
        <div className='mr-3 ml-3'>
            <div className="flex text-align:center justify-between bg-purple-700 mt-2 rounded-t-md">
                <h1 className='flex font-medium text-yellow-300 p-2'><img src="https://cdn-icons-png.flaticon.com/128/17859/17859826.png" height={20} width={40}/>FIND <b className='text-red-500'>RESULTS</b></h1>
                <h1 className='text-white mr-2 mt-1 flex'><img src="https://cdn-icons-png.flaticon.com/128/6024/6024190.png" height={20} width={50}/>Admin</h1>
                <h1 className='text-white mr-2 underline cursor-pointer'><img src="https://cdn-icons-png.flaticon.com/128/14018/14018593.png" height={20} width={50}/></h1>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout