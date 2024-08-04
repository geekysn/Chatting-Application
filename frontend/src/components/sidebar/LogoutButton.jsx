import {BiLogOut} from "react-icons/bi"
import useLogout from "../../hooks/useLogout"
import Loader from "../loader/Loader";

const LogoutButton = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-auto text-green-900'>
        {loading ? <span className="loading loading-spinner"></span> : <BiLogOut className="w-6 h-6 cursor-pointer" onClick={logout}/>}
    </div>
  )
}

export default LogoutButton