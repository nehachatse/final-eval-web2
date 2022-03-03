import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { AuthContext } from "../Context/AuthContext";
import { getUsersRequest, getUsersFailure, getUsersSuccess } from "../Redux/action";
import { Form, Input, Button } from "./Login.styled";
import Navbar from "./Navbar";

export default function Login() {
  const [formData, setFormData] = React.useState({ uname: "", pass: "" });
  const { handleAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {users} = useSelector((state) => state);
  console.log("=============", users)

  useEffect( () => {
    const reqAction = getUsersRequest();
    dispatch(reqAction);

    fetch("http://localhost:3000/users")
    .then( (res) => res.json() )
    .then( res => dispatch(getUsersSuccess(res)) )
    .catch( err => dispatch(getUsersFailure()))
  }, [])

  const handleChange = (e) => {
    let { name, value } = e.currentTarget;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateUser = (e) => {
    e.preventDefault();
    if (
      formData.uname === "" ||
      formData.uname.length < 0 ||
      formData["pass"].length < 0 ||
      formData.pass === ""
    ) {
      alert("Alle fields are required!!!");
    } else {
        let flag = 0
        users.map( (user) => {
            if(user.username == formData.uname && user.password == formData.pass ){
                handleAuth(formData.uname, user.id);
                navigate("/users");
                flag = 1;
                return true;
            }
        } )
        if(flag == 0){
            alert("Wrong Username or Password")
        }
      
    }
  };

  return (
    <>
        <Navbar/>

        <Form>
            <div style={{ marginBottom: "1.5rem" }}>
                <Input
                type="text"
                name="uname"
                value={formData.uname}
                onChange={handleChange}
                placeholder="Enter Username"
                />
            </div>
            <div>
                <Input
                type="password"
                name="pass"
                value={formData.pass}
                onChange={handleChange}
                placeholder="Enter Password"
                />
            </div>
            <Button onClick={(e) => validateUser(e)}>LOGIN</Button>
        </Form>
    </>
    
  );
}
