import React from 'react'

const Signin = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-gray-700 text-center">Signin
            <span className='text-green-800'> ChatApp</span>
          </h1>
          <form action="">
            <div>
              <label htmlFor="" className='label p-2'>
                <span className='text-base label-text text-slate-800'>Username</span>
              </label>
              <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
            </div>
            <div>
              <label htmlFor="" className='label p-2'>
                <span className='text-base label-text text-slate-800'>Password</span>
              </label>
              <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
            </div>
            <a href="#" className='text-sm text-slate-500 hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</a>
            <button className='btn btn-block btn-sm mt-2'>Signin</button>
          </form>
        </div>
    </div>
  )
}

export default Signin