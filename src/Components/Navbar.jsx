import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { NavbarWrapper, Button } from "./Navbar.styled";

export default function Navbar() {
  const { isAuth, user, handleAuth } = useContext(AuthContext);
  console.log(isAuth)

  const handleLogin = () => {
    if (isAuth) handleAuth();
  };
  return (
    <NavbarWrapper>
        {
            isAuth && <h2>Welcome {user}</h2>
        }
      <Button onClick={handleLogin}>{isAuth ? "LOGOUT" : "LOGIN"}</Button>
    </NavbarWrapper>
  );
}
