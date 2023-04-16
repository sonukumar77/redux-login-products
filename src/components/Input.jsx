import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputActionCreator } from "./redux/action";

const Input = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const { inputValue } = useSelector((storeData) => storeData);
  const style = {
    display: "block",
    margin: " 5rem auto",
    textAlign: "center"
  };
  return (
    <div className="input-container" style={style}>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(setInputActionCreator(input))}>
        submit
      </button>

      <p style={{ marginTop: "3rem", color: "green", fontSize: "2rem" }}>
        {inputValue}
      </p>
    </div>
  );
};

export default Input;
