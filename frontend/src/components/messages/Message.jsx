import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../store/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClass = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-green-600" : "bg-grey-900"
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake": "";

  return (
    <div className={`chat ${chatClass}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="user avatar" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-1`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-800">{formattedTime}</div>
    </div>
  )
}

export default Message