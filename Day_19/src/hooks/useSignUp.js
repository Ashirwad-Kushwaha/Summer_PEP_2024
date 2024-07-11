import { toast } from "react-toastify";

const useSignUp = () => {
    const signUp = async ({ name, email, password }) => {
        console.log("Sign Up Called");

        const URL = "http://localhost:1400/api/v1/auth/signup";

        const OPTIONS = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password }),
        };

        try {
            const res = await fetch(URL, OPTIONS);
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to sign up");
            }
            const data = await res.json();
            toast.success(data.message || "Sign up successful!");
        } catch (error) {
            console.error("Error during sign up:", error);
            if (error.message) {
                toast.error(error.message);
            } else {
                toast.error("Something went wrong during sign up");
            }
        }
    };

    return { signUp };
};

export default useSignUp;
