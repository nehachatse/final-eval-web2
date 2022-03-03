import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext"
import { getUsersFailure, getUsersPostsSuccess, getUsersRequest } from "../Redux/action";
import Navbar from "./Navbar";

export default function Posts(){
    const param = useParams();
    const {isAuth} = useContext(AuthContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();   

    useEffect( () => {
        const reqAction = getUsersRequest();
        dispatch(reqAction);
        console.log("890", param);
        fetch( `http://localhost:3000/posts?authod_id=${param.id}`)
        .then( res => res.json() )
        .then( res => dispatch(getUsersPostsSuccess(res)) )
        .catch( err => dispatch(getUsersFailure()) )


    },[])

    return isAuth ? (
        <Navigate to="/users/:id/posts" />
    ) :
    <Navigate to="/" />
}

export const UsersPosts = () => {
    const {posts} = useSelector((state) => state); 
    const {isAuth} = useContext(AuthContext);

    return isAuth ? (
        <div>
            <Navbar/>
            {
                posts.map( (post) => (
                    <div style={{border: "1px solid black", padding: "1rem", margin:"1rem"}}>
                        <h2>{post.post_title}</h2>
                        <p>{post.post_body}</p>
                    </div>
                ))
            }
        </div>
    ) :
    <Navigate to="/" />
}