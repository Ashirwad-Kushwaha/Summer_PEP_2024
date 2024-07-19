import "../../globalStyle.css";
import { useState } from "react";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {

    const loginPageStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useLogin();

    const handleSubmit = () => {
        const validation = true;
        if (validation) {
            login({ email, password });
        }
        else {
            alert("Validation failed");
        }
    }

    return (
        
        <div className="auth-page">
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default LoginPage;