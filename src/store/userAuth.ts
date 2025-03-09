import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode';
import Cookie from 'js-cookie';
import { IDecodePayload } from '@/types/models/signIn';

export interface useAuthProps {
  user: IDecodePayload | undefined;
  isAuthenticated: boolean;
  authenticate: (accessToken: string) => void;
  initialize: () => void;
  signOut: () => void;
}

export const useAuth = create<useAuthProps>((set) => {
  const authenticate = (accessToken: string) => {
    Cookie.set('client-token', accessToken, { sameSite: 'strict' });
    if (accessToken) {
      const decode = jwtDecode<IDecodePayload>(accessToken);
      set(() => ({ isAuthenticated: true, user: decode }));
    }
  };
  const initialize = () => {
    const clientToken = Cookie.get('client-token');
    if (clientToken) {
      authenticate(clientToken);
    } else set(() => ({ isAuthenticated: false, user: undefined }));
  };

  const signOut = () => {
    Cookie.remove('client-token');
    set(() => ({ isAuthenticated: false, user: undefined }));
  };

  return {
    user: undefined,
    isAuthenticated: false,
    authenticate,
    initialize,
    signOut,
  };
});
