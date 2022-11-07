import React from "react";

export const Button = (props) => {
  return (
    <button onClick={props.onClick} style={styles.count}>
      {props.name}
    </button>
  );
};

const styles = {
  count: {
    color: "white",
    backgroundColor: "gray",
    fontSize: "32px",
    width: "100px",
    borderRadius: "40px",
    margin: "30px",
    padding: "20px",
    boxSizing: "border-box",
  },
};
