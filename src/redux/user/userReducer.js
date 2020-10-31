import { USER_LOGIN } from "./userActionTypes";

const initialState = {
  profile: null,
  token: null,
  loading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default user;
