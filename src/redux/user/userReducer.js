import { USER_LOGIN, USER_LOGIN_LOADING, USER_LOGOUT } from "./userActionTypes";

const initialState = {
  profile: null,
  token: null,
  loading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_LOADING:
      return { ...state, loading: true };

    case USER_LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        profile: { name: action.payload.name, email: action.payload.email },
      };

    case USER_LOGOUT:
      localStorage.clear();
      return {};

    default:
      return { ...state };
  }
};

export default user;
