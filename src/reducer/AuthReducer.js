export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "SIGN_OUT":
      return { ...state, user: null, isAuthenticated: false };

    default:
      return state;
  }
};
