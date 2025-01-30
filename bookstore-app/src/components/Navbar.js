import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout} = useAuth();
    return (
        <nav style={{ 
            display: "flex", 
            gap: "20px", 
            padding: "10px", 
            borderBottom:"1px solid #ccc"}}>
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
                {user ? <button onClick={logout}>Logout</button>: 
                <Link to="/login">Login</Link>}
            </nav>
        );
};
export default Navbar;