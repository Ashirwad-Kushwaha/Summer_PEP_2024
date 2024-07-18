import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppContext from "../context/appContext";

const useLogin = () => {
    const {appLogin} = useContext(AppContext);

    const navigate = useNavigate();
    

    const login = async ({ email, password }) => {
        console.log("Login Called");

        try {
        const URL = "http://localhost:1400/api/v1/auth/login";

        const OPTIONS = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password }),
        };

            const res = await fetch(URL, OPTIONS);
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to log in");
            }
            data = await res.json();
            toast.success(data.message || "Login successful!");
            if(data.status === "success"){
                appLogin(data.data.user);
                localStorage.setItem("token", data.data.token);
            }
        } catch (error) {
            console.error("Error during login:", error);
            if (error.message) {
                toast.error(error.message);
            } else {
                toast.error("Something went wrong during login");
            }
        }


    };

    return { login };
};

export default useLogin;