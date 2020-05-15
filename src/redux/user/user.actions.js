import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_IN_OUT_UP_FAILURE,
} from './user.types';

/* -------------------------------------------------------------------------- */

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = userCredentials => ({
  type: EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signUpStart = userCredentials => ({
  type: SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = userInfo => ({
  type: SIGN_UP_SUCCESS,
  payload: userInfo,
});

export const signInOutUpFailure = error => ({
  type: SIGN_IN_OUT_UP_FAILURE,
  payload: error,
});
