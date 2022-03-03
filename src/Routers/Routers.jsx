import {Routes, Route} from "react-router-dom";
import Login from "../Components/Login";
import Posts, { UsersPosts } from "../Components/Posts";
import User from "../Components/User";

export default  function Routers(){
    return (
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/users" element={<User/>} />
            <Route path="/users/:id" element={<Posts/>}/>
            <Route path="/users/:id/posts" element={<UsersPosts/>} />
        </Routes>
    )
}