const INITIAL_STATE = {
  isLoggedIn: false,
  userName: "",
  inputValue: "",
  products: null
};

const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_CHECK":
      return { ...state, isLoggedIn: action.payload };
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    case "SET_INPUT":
      return { ...state, inputValue: action.payload };
    case "SET_PRODUCT":
      return { ...state, products: action.payload };
    default: {
      return state;
    }
  }
};

export default myReducer;
