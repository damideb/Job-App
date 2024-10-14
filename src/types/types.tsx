import React from "react";

export type jobDetails = {
  position: string;
  company: string;
  jobLocation: string;
  jobType: string;
  status: string;
  createdAt?: string |undefined;
  _id?: string |undefined;
};

export type jobSearch = {
  employer_name: string;
  job_title: string;
  job_apply_link: string;
  job_city:string;
  job_state: string;
  job_description: string;
  job_is_remote: boolean;
  job_employment_type: string;
  job_posted_at_datetime_utc: string;
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
  showMenu: boolean;
  setShowMenu: React.Dispatch<boolean>;
}
