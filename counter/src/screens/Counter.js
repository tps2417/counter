import React, { useState } from "react";
import { Button } from "../components/Button";

export const Counter = () => {
  // const [state, setState] = useState(初期値);
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <p style={styles.countText}>{count}</p>
      </div>
      <div style={styles.buttonArea}>
        <Button name="＋" number="3" color="red" onClick={plus} />
        <Button name="-" onClick={minus} />
      </div>
    </div>
  );
};

const styles = {
  countText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontSize: "48px",
  },

  buttonArea: {
    color: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
