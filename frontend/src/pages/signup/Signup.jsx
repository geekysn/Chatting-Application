import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-700 text-center">Signup
          <span className='text-green-800'> ChatApp</span>
        </h1>
        <form action="">
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text text-slate-800'>Full Name</span>
            </label>
            <input type="text" placeholder='Enter your name' className='w-full input input-bordered h-10'/>
          </div>
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
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text text-slate-800'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Re-enter your password' className='w-full input input-bordered h-10'/>
          </div>
          <div>
            <label htmlFor="" className='label p-2'>
              <span className='text-base label-text text-slate-800'>Phone Number</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
          </div>
          <GenderCheckbox/>
          <a href="#" className='text-sm text-slate-500 hover:underline hover:text-blue-600 mt-1 inline-block'>{"Don't"} have an account?</a>
          <div>
            <button className='btn btn-block btn-sm mt-2'>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup