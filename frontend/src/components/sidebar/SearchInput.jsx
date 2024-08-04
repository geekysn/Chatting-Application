import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5"
import useConversation from '../../store/useConversation';
import toast from 'react-hot-toast';
import useGetConversations from '../../hooks/useGetConversations';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search)return;
    if(search.length<3){
      return toast.error("Search must be at least 3 characters");
    }
    const conversation = conversations.find(conversation => conversation.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }
    else{
      toast.error("User not found");
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <input type="text" placeholder="Search"  className='input input-bordered rounded-full'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn btn-circle bg-green-600 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none'/>
            </button>
        </form>
    </div>
  )
}

export default SearchInput