import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const {loading, messages} = useGetMessage();
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior: 'smooth'})
    },100)
    // lastMessageRef.current?.scrollIntoView({behavior: 'smooth'})
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-900 scrollbar-track-transparent h-32 scrollbar-thin overflow-y-scroll'>
      {
        !loading && messages.length > 0 && messages.map((message)=>{
          return <div key={message.id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        })
      }
      {
        loading && [...Array(3)].map((_, idx)=><MessageSkeleton key={idx}/>)
      }
      {
        !loading && messages.length === 0 && (
          <p className='text-center text-slate-600'>Send a message to start the conversation! 🗣️</p>
        )
      }
    </div>
  )
}

export default Messages