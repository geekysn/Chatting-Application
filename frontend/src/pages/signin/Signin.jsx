import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignin from '../../hooks/useSignin';
import Loader from '../../components/loader/Loader';

const Signin = () => {
  const [mobNo, setMobNo] = useState("");
  const [password, setPassword] = useState("");

  const {loading, signin} = useSignin();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await signin(mobNo, password);
  }

  return (
    <>
      {
        loading ? <Loader/> : (
          <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
              <h1 className="text-3xl font-semibold text-gray-700 text-center">Signin
                <span className='text-green-800'> ChatApp</span>
              </h1>
              <form action="" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text text-slate-800'>Phone Number: </span>
                  </label>
                  <input type="text" placeholder='Enter phone number' className='w-full input input-bordered h-10' value={mobNo} onChange={(e)=>{
                    setMobNo(e.target.value)
                  }}/>
                </div>
                <div>
                  <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text text-slate-800'>Password</span>
                  </label>
                  <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' value={password} onChange={(e)=>{
                    setPassword(e.target.value)}}/>
                </div>
                <Link to='/signup' className='text-sm text-slate-500 hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</Link>
                <button className='btn btn-block btn-sm mt-2' disabled={loading}>Signin</button>
              </form>
            </div>
        </div>
        )
      }
    </>
  )
}


export default Signin