import { useContext } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Navbar from "./Navbar";

export default function User(){
    let {isAuth, id} = useContext(AuthContext);
    console.log(id)

    return isAuth ? (
        <div>
            <Navbar/>
            <Link to={`/users/${id}`}><button >See posts</button></Link>
        </div>
    ) :
    ( <Navigate to="/" />)
}