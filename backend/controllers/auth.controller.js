export const signup = (req,res)=>{
    try {
        const body = req.body;
        const {fullName,username,password,confirmPassword,mobNo} = body;
    } 
    catch (error) {
        
    }
}

export const signin = (req,res)=>{
    console.log("signin")
}

export const logout = (req,res)=>{
    console.log("logout")
}