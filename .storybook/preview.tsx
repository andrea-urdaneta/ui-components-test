import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/theme/ThemeContext";
import { tokens } from "../src/theme/themes/defaultToken";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTokens={tokens}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
