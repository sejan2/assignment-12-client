import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";


// 1
const useAuth = () => {
    // 2
    const auth = useContext(AuthContext);
    // 3
    return auth;
}
export default useAuth;