import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({
        fullName,
        username,
        password,
        confirmPassword,
        mobNo,
        gender}) => {
        const success = SafeParse({
            fullName,
            username,
            password,
            confirmPassword,
            mobNo,
            gender,
        });
        if (!success) return;

        setLoading(true);
        const postData = {
            fullName,
            username,
            password,
            confirmPassword,
            mobNo,
            gender,
        };
        try {
          const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fullName,
              username,
              password,
              confirmPassword,
              mobNo,
              gender,
          }),
          });
    
          const data = await res.json();
          if (data.error) {
            throw new Error(data.error);
          }
          localStorage.setItem("chat-user", JSON.stringify(data));
          setAuthUser(data);
            toast.success("Signup successful!");
        } 
        catch (error) {
            toast.error(error.message);
        } 
        finally {
            setLoading(false);
        }
    };
    return { loading, signup };
};

function SafeParse({
  fullName,
  username,
  password,
  confirmPassword,
  mobNo,
  gender,
}) {
  if (
    !fullName ||
    !username ||
    !password ||
    !confirmPassword ||
    !mobNo ||
    !gender
  ) {
    toast.error("Please fill all the fields!");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match!");
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

export default useSignup;
