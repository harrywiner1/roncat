import React from "react";

const input = (props) => {
  return (
    <input
      type="text"
      size={props.value && props.value.length > 5 ? props.value.length : 5}
      id={"word-" + props.id}
      onChange={props.changed}
      value={props.value || ""}
    ></input>
  );
};

export default input;
