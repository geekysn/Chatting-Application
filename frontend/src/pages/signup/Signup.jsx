import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';
import Loader from '../../components/loader/Loader';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    mobNo:"",
    gender:"",
  });

  const {loading, signup} = useSignup();

  const handleGenderInput = (gender)=>{
    setInputs({...inputs,gender:gender})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <>
      {
        loading ? <Loader/> : (
          <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
              <h1 className="text-3xl font-semibold text-gray-700 text-center">Signup
                <span className='text-green-800'> ChatApp</span>
              </h1>
              <form action="" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text text-slate-800'>Full Name</span>
                  </label>
                  <input value={inputs.fullName} onChange={(e)=>{
                    setInputs({...inputs, fullName : e.target.value})
                  }} type="text" placeholder='Enter your name' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                  <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text text-slate-800'>Username</span>
                  </label>
                  <input value={inputs.username} onChange={(e)=>{
                    setInputs({...inputs, username : e.target.value})
                  }} type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                  <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text text-slate-800'>Password</span>
                  </label>
                  <input value={inputs.password} onChange={(e)=>{
                    setInputs({...inputs, password : e.target.value})
                  }} type="password" placeholder='Enter password' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                  <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text text-slate-800'>Confirm Password</span>
                  </label>
                  <input value={inputs.confirmPassword} onChange={(e)=>{
                    setInputs({...inputs, confirmPassword : e.target.value})
                  }} type="password" placeholder='Re-enter your password' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                  <label htmlFor="" className='label p-2'>
                    <span className='text-base label-text text-slate-800'>Phone Number</span>
                  </label>
                  <input value={inputs.mobNo} onChange={(e)=>{
                    setInputs({...inputs, mobNo  : e.target.value})
                  }} type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
                </div>
                <GenderCheckbox onRadioChange={handleGenderInput} genderSelected={inputs.gender}/>
                <Link to="/signin" className='text-sm text-slate-500 hover:underline hover:text-blue-600 mt-1 inline-block'>{"Already"} have an account?</Link>
                <div>
                  <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                    {
                      loading ? <span className='loading loading-spinner'></span> : "SignUp"
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Signup