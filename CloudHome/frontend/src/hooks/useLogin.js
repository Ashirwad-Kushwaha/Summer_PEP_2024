const useLogin = () => {
    const login = async ({ email, password }) => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/login`, {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "content-Type": "application/json",
                },
            })
            console.log(res);
            const data = await res.json();
            console.log(data);
        } catch (e) {
            console.log(e.message);
            alert("Signup failed: " + e.message);

        }
    };
    return { login };
};

export default useLogin;