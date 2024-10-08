import React from "react";

export type jobDetails = {
  position: string;
  company: string;
  jobLocation: string;
  jobType: string;
  status: string;
};

type user = {
  name: string;
  email: string;
  location: string;
};

export interface AuthState {
  isLoggedIn: boolean;
  loading: boolean;
  user: user | null;
}

export interface AuthAction {
  type: string;
  payload?: {
    user?: user | null;
  };
}

export interface AuthContextProvider {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  loading: boolean;
  setLoading: React.Dispatch<boolean>;
}
