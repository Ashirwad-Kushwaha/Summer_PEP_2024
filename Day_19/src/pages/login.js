import { useState } from "react";
import useLogin from "../hooks/useLogin";
import "../../globalStyle.css";
import Navbar from "../components/navbar";

const Login = () => {
    const { login } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        login({ email, password });
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
        </div>
        </>
    )
};

export default Login;
