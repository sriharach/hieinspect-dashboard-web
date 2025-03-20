import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode';
import Cookie from 'js-cookie';
import { IDecodePayload } from '@/types/models/signIn';
import axiosConfig from '@/services/axiosConfig';
import { AxiosError } from 'axios';

export interface useAuthProps {
  user: IDecodePayload | undefined;
  isAuthenticated: boolean;
  initialized: boolean
  authenticate: (accessToken: string) => void;
  initialize: () => void;
  signOut: () => void;
}

export const useAuth = create<useAuthProps>((set, get) => {
  const authenticate = async (accessToken: string) => {
    Cookie.set('client-token', accessToken, { sameSite: 'strict' });
    if (accessToken) {
      axiosConfig.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      axiosConfig.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error instanceof AxiosError) {
            if (error.response?.status === 403 || error.response?.status === 401) {
              get().signOut();
            }
            return Promise.reject(error);
          }
        },
      );

      // await GET_USER_SERVICE()
      const decode = jwtDecode<IDecodePayload>(accessToken);
      set(() => ({ isAuthenticated: true, initialized: true, user: decode }));
    }
  };
  const initialize = () => {
    const clientToken = Cookie.get('client-token');
    if (clientToken) {
      authenticate(clientToken);
    } else {
      get().signOut()
    }
  };

  const signOut = () => {
    Cookie.remove('client-token');
    // axiosConfig.interceptors.response.eject()
    set(() => ({ isAuthenticated: false, initialized: true, user: undefined }));
  };

  return {
    user: undefined,
    isAuthenticated: false,
    initialized: false,
    authenticate,
    initialize,
    signOut,
  };
});
