import React from "react";
import { useTheme } from "../../../theme/ThemeContext";

type Props = {
  title: string;
  onPress: () => void;
};

const Button = ({ title, onPress }: Props) => {
  const { tokens } = useTheme();
  return (
    <button
      onClick={onPress}
      style={{
        backgroundColor: tokens.color.action.primary["400"],
        padding: 12,
        borderRadius: 8,
      }}
    >
      {title}
    </button>
  );
};

export default Button;
