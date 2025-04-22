// src/components/atoms/Button/Button.tsx
import React from "react";
var Button = ({ title, onPress }) => /* @__PURE__ */ React.createElement("button", { onClick: onPress, style: styles.button }, title);
var styles = {
  button: {
    padding: "12px",
    backgroundColor: "blue",
    border: "none",
    borderRadius: "6px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  }
};
export {
  Button
};
