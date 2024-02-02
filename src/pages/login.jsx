import React from "react";
import { UserInput } from "../assets/components/login/login";
import { Link as Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Card = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/sea-web-gen8-v2/dashboard');
  };

  return (
      <div className="login-card flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center w-[32vw] font-Poppins bg-white rounded-xl shadow-md p-14 gap-y-4">
              <Navigate to="/sea-web-gen8-v2/"><img src="src\assets\SEA-logo.png" alt="SEA-logo" className="w-24"/></Navigate>
              <div className="font-bold text-2xl w-full my-4">
                  Welcome To<br/>SEA Laboratory
              </div>
              <UserInput field="Username/NIM" type="text" placeholder="SSO Username or NIM"></UserInput>
              <UserInput field="Password" type="password" placeholder="Password"></UserInput>
              <button onClick={handleLoginClick} className="flex justify-center font-semibold text-white bg-gradient-to-r from-sky-400 to-blue-500 w-full py-2 rounded-lg my-4">LOGIN</button>
            </div> 
      </div>
  )
}

function Login() {
    return (
      <Card></Card>
    )
}
  
export default Login