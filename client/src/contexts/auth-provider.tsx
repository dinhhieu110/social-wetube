'use client';
import api from '@/config/api';
import User from '@/types/UserType';
import { constants } from '@/utils';
import { FC, ReactNode, createContext, useReducer, Dispatch } from 'react';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  message?: string;
}

type AuthAction =
  | { type: 'LOGIN_PENDING' }
  | { type: 'LOGIN_FULFILLED'; payload: User }
  | { type: 'LOGIN_REJECT' }
  | { type: 'LOGOUT' };

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isError: false,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return { ...state, user: null, isLoading: true, isError: false };
    }
    case 'LOGIN_FULFILLED': {
      return { ...state, user: action.payload, isLoading: false, isError: false };
    }
    case 'LOGIN_REJECT': {
      return { ...state, user: null, isLoading: false, isError: true, message: constants.sthWentWrong };
    }
    default:
      return state;
  }
};

interface AuthContextProps extends AuthState {
  dispatch: Dispatch<AuthAction>;
  login: (credentials: { email: string; password: string }) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: Readonly<ReactNode>;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (credentials: { email: string; password: string }) => {
    dispatch({ type: 'LOGIN_PENDING' });
    try {
      const response = await api('/auth/login', 'POST', credentials);
      dispatch({ type: 'LOGIN_FULFILLED', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_REJECT' });
    }
  };

  return <AuthContext.Provider value={{ ...state, dispatch, login }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
