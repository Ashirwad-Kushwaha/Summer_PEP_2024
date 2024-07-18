import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignupPage = () => {

    const SignupPageStyle = {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '24px',
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signup} = useSignup();

    const handleSubmit = () => {
        const validation = true;
        if (validation) {
            signup({email, password});
        }
        else{
            alert("Validation failed");
        }
    }

    return (
        <div style={SignupPageStyle}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>SignUp</button>
        </div>
    )
}

export default SignupPage;