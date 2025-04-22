import React from "react";

type Props = {
  title: string;
  onPress: () => void;
};

const Button = ({ title, onPress }: Props) => (
  <button onClick={onPress} style={styles.button}>
    {title}
  </button>
);

const styles = {
  button: {
    padding: "12px",
    backgroundColor: "blue",
    border: "none",
    borderRadius: "6px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Button;
