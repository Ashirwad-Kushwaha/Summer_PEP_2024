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
        <div style={loginPageStyle}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>SignUp</button>
        </div>
    )
}

export default LoginPage;