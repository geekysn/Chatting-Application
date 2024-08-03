import {BsSend} from "react-icons/bs"

const MessageInput = () => {
    return (
        <form action="" className='px-4 my-3'>
            <div className="w-full relative">
                <input type="text" placeholder='Send a message' className="w-full text-sm p-2.5 rounded-lg border border-gray-600 text-white bg-gray-700 block"/>
                <button type='submit' className='inset-y-0 absolute end-0 flex items-center pe-3'>
                    <BsSend/>
                </button>
                
            </div>
        </form>
    )
}

export default MessageInput