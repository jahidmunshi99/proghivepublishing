import { createContext, useReducer } from "react";
import { AuthReducer } from "../reducer/AuthReducer";
import { authInitialState } from "../reducer/InitialState";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, authInitialState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
