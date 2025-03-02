import { useState } from "react";
import { useAuth} from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userbane, password);
    };

    return(
        <div>
            <h2> Login </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username}
                onChange={(e) => 
                    setUsername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button> 
            </form>
        </div>
    );
};

export default Login;