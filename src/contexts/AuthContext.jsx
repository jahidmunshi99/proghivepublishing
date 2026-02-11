import { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import { AuthReducer } from "../reducer/AuthReducer";
import { authInitialState } from "../reducer/InitialState";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, authInitialState);
  const [showItems, setShowItems] = useState(3);
  const navigate = useNavigate();

  const handleLoadMore = () => {
    if (!authState.isAuthenticated) {
      return navigate("/login");
    } else {
      setShowItems((e) => e + showItems);
    }
  };

  return (
    <AuthContext.Provider
      value={{ authState, authDispatch, showItems, handleLoadMore }}
    >
      {children}
    </AuthContext.Provider>
  );
};
