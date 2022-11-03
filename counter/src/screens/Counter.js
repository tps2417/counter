import React, { useState } from "react";
import { Button } from "../components/Button";

export const Counter = () => {
  // const [state, setState] = useState(初期値);
  const [count, setCount] = useState(0);

  const plus = () => {
    console.log("ボタン押した");
    setCount(count + 1);
  };

  const minus = () => {
    console.log("マイナス");
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p style={styles.countText}>{count}</p>
      <div style={styles.buttonArea}>
        <Button name="＋" number="3" color="red" onClick={plus} />
        <Button name="−" onClick={minus} />
      </div>
    </div>
  );
};

const styles = {
  countText: {
    color: "blue",
  },

  buttonArea: {
    color: "red",
    backgroundColor: "blue",
    // margin: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
