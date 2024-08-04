import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const {loading, sendMessage} = useSendMessage();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!message)return;
        await sendMessage(message);
        setMessage("");
    }
    return (
        <form action="" className="px-4 my-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input
                type="text"
                className="w-full text-sm p-2.5 rounded-lg border border-gray-600 text-white bg-gray-700 block"
                placeholder="Send a message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                />
                <button
                type="submit"
                className="inset-y-0 absolute end-0 flex items-center pe-3"
                >
                    {loading ? <div className="loading loading-spinner"></div> : <BsSend />}
                </button>
            </div>
        </form>
    );
};

export default MessageInput;
