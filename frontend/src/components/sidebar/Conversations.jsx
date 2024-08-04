import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emoji';

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  // console.log(conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-900 scrollbar-track-transparent h-auto scrollbar-thin overflow-y-scroll'>
      {
        conversations.map((conversation, idx) => (
          <Conversation key={conversation._id} id={conversation._id} conversation={conversation} emoji={getRandomEmoji} lastIdx={idx === conversations.length - 1}/>
        ))
      }
      {
        loading ? <span className='loading loading-spinner mx-auto'></span> : null
      }
    </div>
  )
}

export default Conversations