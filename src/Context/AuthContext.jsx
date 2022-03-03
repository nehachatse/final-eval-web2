import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [id, setId] = React.useState(0);

  const handleAuth = (userName, id) => {
    console.log("Im here", isAuth);
    if (isAuth) {
      setIsAuth(false);
    } else {
      setUser(userName);
      setId(id);
      setIsAuth(true);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, id, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
