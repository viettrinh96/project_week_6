import * as types from "../constants/auth.constants";
const initialState = {
  user: {},
  isAuthenticated: true,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        accessToken: payload.accessToken,
        loading: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        loading: false,
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
