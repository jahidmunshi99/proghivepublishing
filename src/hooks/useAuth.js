import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const useAuthContext = useContext(AuthContext);
  return useAuthContext;
};
