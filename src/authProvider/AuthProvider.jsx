import React, { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  return (
    <AuthContext value={{ user: "name:niyamot ali" }}>{children}</AuthContext>
  );
};

export default AuthProvider;
