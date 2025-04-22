import React from "react";
import Button from "../../components/atoms/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = () => (
  <Button title="Click me" onPress={() => alert("Pressed!")} />
);
