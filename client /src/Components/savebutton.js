import React from "react";
import "./saveButton.css";

function SaveButton(props) {
  return (
    <span
      className="btn btn-primary save-btn"
      {...props}
      role="button"
      tabIndex="0"
    >
      Save
    </span>
  );
}

export default SaveButton;
