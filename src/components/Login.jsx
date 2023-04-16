import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  loggedInActionCreator,
  setUsernameActionCreator
} from "./redux/action";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const style = {
    width: "300px",
    height: "300px",
    boxShadow: "0 0 10px black",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem"
  };

  const dispatch = useDispatch();

  const handleAuth = () => {
    if (
      (username === "sonu" && password === "sonu") ||
      (username === "admin" && password === "admin")
    ) {
      dispatch(loggedInActionCreator(true));
      dispatch(setUsernameActionCreator(username));
    }
  };
  return (
    <div
      className="loginContainer"
      style={{ display: "flex", justifyContent: "center", marginTop: "120px" }}
    >
      <div style={style}>
        <h1 style={{ textAlign: "center" }}>Login </h1>
        <small>Username: admin</small>
        <small>Password: admin</small>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleAuth}>Login</button>
      </div>
    </div>
  );
};
export default Login;
