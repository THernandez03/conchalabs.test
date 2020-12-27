import { SIGN_IN, SIGN_OUT } from '../constants/actionTypes';

export const signIn = (payload) => ({ type: SIGN_IN, payload });
export const signOut = (payload) => ({ type: SIGN_OUT, payload });
