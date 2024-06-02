import { ID } from "appwrite";
import { toast } from "sonner";
import { account } from "../lib/appwrite.js";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "./LoadingSpinner";
import { createContext, useState, useEffect, useContext } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
  storageKey?: string;
};

type AuthProviderState = {
  user: any;
  loginUser: (userInfo: any) => void;
  logoutUser: () => void;
  registerUser: (userInfo: any) => void;
};

const initialState: AuthProviderState = {
  user: null,
  loginUser: () => null,
  logoutUser: () => null,
  registerUser: () => null,
};

const AuthContext = createContext<AuthProviderState>(initialState);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    //setLoading(false)
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo: any) => {
    setLoading(true);
    try {
      let response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      toast.success("Successfully logged in!", {
        description: `Logged in at ${new Date(
          Date.now()
        ).toLocaleDateString()}`,
      });
      setUser(accountDetails);
    } catch (error: any) {
      toast.error("Something went wrong!", error?.message);
      console.error(error);
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      await account.deleteSession("current");
      toast.info("Logged out!");
      setUser(null);
    } catch (error: any) {
      toast.error("Something went wrong!", error?.message);
      console.error(error);
    }
    setLoading(false);
  };

  const registerUser = async (userInfo: any) => {
    setLoading(true);
    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      );
      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      toast.success("Successfully signed up!", {
        description: `Registered at ${new Date(
          Date.now()
        ).toLocaleDateString()}`,
      });
      setUser(accountDetails);
      navigate("/");
    } catch (error: any) {
      toast.error("Something went wrong!", error?.message);
      console.error(error);
    }
    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error: any) {
      toast.error("Something went wrong!", error?.message);
      console.error(error);
    }
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <LoadingSpinner /> : children}
    </AuthContext.Provider>
  );
};

//Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
