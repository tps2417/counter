import React from "react";

export const Button = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={props.onClick} style={styles.count}>
        {props.name}
      </button>
    </div>
  );
};

const styles = {
  count: {
    // color: "red",
    textAlign: "center",
    width: 80,
    height: "80px",
    borderRadius: "50%",
  },
};
