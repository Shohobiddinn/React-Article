import { Login, Register } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { loginType } from "../slice/authSlice";
export default function SignIn() {
    const isLoggedIn = useSelector((state: RootState) => state.auth.login);
    return (
        <>
            {isLoggedIn ? <Login /> : <Register />}
        </>
    )
}