export const loggedInActionCreator = (isLogin) => {
  return {
    type: "LOGIN_CHECK",
    payload: isLogin
  };
};

export const setUsernameActionCreator = (name) => {
  return {
    type: "SET_USERNAME",
    payload: name
  };
};
export const setInputActionCreator = (inputValue) => {
  return {
    type: "SET_INPUT",
    payload: inputValue
  };
};

export const setProductActionCreator = (product) => {
  return {
    type: "SET_PRODUCT",
    payload: product
  };
};
