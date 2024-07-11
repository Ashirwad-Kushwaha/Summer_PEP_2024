import { toast } from "react-toastify";

const useLogin = () => {
    const login = async ({ email, password }) => {
        console.log("Login Called");

        const URL = "http://localhost:1400/api/v1/auth/login";

        const OPTIONS = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password }),
        };

        try {
            const res = await fetch(URL, OPTIONS);
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to log in");
            }
            const data = await res.json();
            toast.success(data.message || "Login successful!");
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