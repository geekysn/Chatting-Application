import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://api.dicebear.com/9.x/personas/svg?seed=Felix" alt="user avatar" />
            </div>
        </div>
        <div className="chat-bubble text-white bg-green-600">hi I'am Snehil Sharma</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-800">12:42</div>
    </div>
  )
}

export default Message