
import { createContext, useReducer, useState } from "react";
import { AuthState, AuthAction, AuthContextProvider } from "../types/types";


const AuthContext = createContext<AuthContextProvider | null>(null);

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
  
  const initialState = {
    isLoggedIn: false,
    loading: true,
    user: null,
  };

  function Reducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          isLoggedIn: true,
          loading: false,
        };
      case "LOGOUT":
        return { ...state, isLoggedIn: false, loading: false, user: null };

      case 'GetCurrentUser':
        return{
          ...state,
          loading: false,
          user: action.payload?.user || null,
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(Reducer, initialState);
  const [loading, setLoading] = useState(true);

  // const setLoading = useCallback((value) => {
  //   setLoadingState(value); // `setLoadingState` updates the state stored in context
  // }, []);


return (
  <AuthContext.Provider value={{state, dispatch, loading, setLoading}} >
    {children}
  </AuthContext.Provider>
)
};

export {AuthContext,ContextProvider}