import { useContext } from "react";
import { AuthContext } from "../Context/context";
import { AuthContextProvider } from "../types/types";

export default function useGlobalContext() {
    const context = useContext(AuthContext) as AuthContextProvider;
  return context;
}
