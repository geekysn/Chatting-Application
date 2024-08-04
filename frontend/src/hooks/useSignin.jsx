import axios from 'axios';
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useSignin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    
    const signin = async (mobNo, password)=>{
        const body = {mobNo, password};
        const success = SafeParse(body);
        if(!success)return;
        setLoading(true);
        try {
            const res = await axios.post("/api/auth/signin", body,{
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            const data = res.data;
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
            toast.success("Signin successfull!");
        } 
        catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {loading, signin};
}

function SafeParse({password, mobNo,}) {
    if (!password || !mobNo) {
      toast.error("Please fill all the fields!");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }
    if (mobNo.length !== 10) {
      toast.error("Invalid mobile number!");
      return false;
    }
    return true;
  }

export default useSignin