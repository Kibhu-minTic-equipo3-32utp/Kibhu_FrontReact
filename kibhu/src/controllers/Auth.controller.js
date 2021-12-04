import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiLogin } from "./Apis";

const AuthContext = createContext();

const AuthProvider =({children}) => {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    useEffect (() => {
        let token = localStorage.getItem("token");
        if (token) {
            setAuth(true);
        }
    }, []);


    const handleLogin = async (objUser) => {
        const resp = await fetch(apiLogin, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objUser)
        });
        if (resp.status === 200) {
            let json = await resp.json();
            localStorage.setItem("token", json.token);
            setAuth(true);
            navigate("/");
        }
        return resp.status;
    };
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
        setAuth(false);
    };
    const data = {handleLogin, auth, handleLogout};

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider};
export default AuthContext;