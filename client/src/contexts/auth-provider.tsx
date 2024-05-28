'use client';
import api from '@/config/api';
import { useMount } from '@/hooks';
import User from '@/types/user';
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
  | { type: 'LOGIN_REJECT'; payload?: string }
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
      return {
        ...state,
        user: null,
        isLoading: false,
        isError: true,
        message: action.payload || constants.sthWentWrong,
      };
    }
    case 'LOGOUT': {
      return initialState;
    }
    default:
      return state;
  }
};

interface AuthContextProps extends AuthState {
  dispatch: Dispatch<AuthAction>;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: Readonly<ReactNode>;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useMount(async () => {
    dispatch({ type: 'LOGIN_PENDING' });
    try {
      const response = await api('/auth/login-refresh', 'POST');
      localStorage.setItem('token', response.data.token);
      dispatch({ type: 'LOGIN_FULFILLED', payload: response.data });
    } catch (error: any) {
      dispatch({ type: 'LOGIN_REJECT' });
      throw error;
    }
  });

  const login = async (credentials: { email: string; password: string }) => {
    dispatch({ type: 'LOGIN_PENDING' });
    try {
      const response = await api('/auth/login', 'POST', credentials);
      localStorage.setItem('token', response.data.token);
      dispatch({ type: 'LOGIN_FULFILLED', payload: response.data });
    } catch (error: any) {
      dispatch({ type: 'LOGIN_REJECT', payload: error?.data?.message });
      throw error;
    }
  };

  const logout = async () => {
    dispatch({ type: 'LOGOUT' });
    try {
      await api('/auth/logout');
    } catch (error: any) {
      throw error;
    }
  };

  return <AuthContext.Provider value={{ ...state, dispatch, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
