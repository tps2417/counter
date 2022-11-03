import React, { useState } from "react";
import { Button, styles } from "../components/Button";

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
      <p class="counts">{count}</p>
      <span>
        <Button name="＋" number="3" color="red" onClick={plus} />
        <Button name="−" onClick={minus} />
      </span>
    </div>
  );
};
