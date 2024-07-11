import { useState } from "react";
import useSignUp from "../hooks/useSignUp";
import "../../globalStyle.css";
import Navbar from "../components/navbar";

const SignUp = () => {
    const { signUp } = useSignUp();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        let validation = true;
        if (validation) {
            signUp({ name, email, password });
        } else {
            alert("Validation Failed");
        }
    }
    return (
        <>
        <Navbar/>
        <div className="signUpParent">
        <div className="signUp">
                <h1>Sign Up</h1>
                <label htmlFor="name">Name</label>
                <input placeholder="Please Enter Name" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }}  />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Please Enter Email" value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }} />
                <label htmlFor="password">Password</label>
                <input placeholder="Please Enter Password" type="password" value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <button onClick={validate}>Sign Up</button>
            </div>
        </div>
        </>
    )
};

export default SignUp;
