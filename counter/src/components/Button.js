import React from "react";

export const Button = (props) => {
  console.log(props);
  return (
    <span>
      <button onClick={props.onClick} style={styles.count}>
        {props.name}
      </button>
    </span>
  );
};

const styles = {
  count: {
    // color: "red",
    backgroundColor: "red",
    width: 80,
    height: "80px",
    borderRadius: "50%",
  },
};
