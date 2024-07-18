import { useState } from "react";
import useLogin from "../hooks/useLogin";
import "../../globalStyle.css";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate(); 

    const handleLogin = () => {
    const validate1 = email.length >4;
    const validate2 = password.length >=8;
    if(validate1 && validate2){
                login({ email, password });

    }
    else if(!validate1){
        alert("Invalid Email");
    }
    else{
        alert("Invalid Password");
    }
    }

    return (
        <>
        <Navbar/>
        <div className="signUpParent">
        <div className="signUp">
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
<Link to="/signUp">Don't have an account? Sign Up</Link>
        </div>
        </>
    )
};

export default Login;
