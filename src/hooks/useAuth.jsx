import { use } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";

const useAuth = () => {
  const authDetails = use(AuthContext);
  return authDetails;
};

export default useAuth;
