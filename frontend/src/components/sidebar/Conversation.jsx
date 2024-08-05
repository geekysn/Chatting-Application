import React from 'react'
import useConversation from '../../store/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({id, conversation, emoji, lastIdx}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === id;

  const {onlineUsers} = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
        <div onClick={()=>{
          setSelectedConversation(conversation);
        }} className={`flex gap-2 items-center hover:bg-green-600 rounded p-2 py-1 cursor-pointer ${isSelected? "bg-green-600": ""}`}>
          <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-full'>
              <img src={conversation.profilePic} alt="user avatar" />
            </div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
              <p className='font-bold text-green-900'>{conversation.fullName}</p>
              <span className='text-xl'>{emoji()}</span>
            </div>
          </div>
        </div>
        {
          lastIdx ? null : <div className='divider my-0 py-0 h-1 bg-slate-700 rounded-full'/>
        }
    </>
  )
}

export default Conversation