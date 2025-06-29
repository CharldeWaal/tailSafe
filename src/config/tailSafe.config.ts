// Config for alias/composite props for TailSafe codegen
// Only add props here that should generate multiple Tailwind classes or are composite/alias utilities
import { TailSafeConfig } from "../types";

const tailSafeConfig: TailSafeConfig = {
  // For flex, we want 'flex-row' and 'flex-col' to generate both 'flex' and the direction
  aliases: {
    'flex-row': ['flex', 'flex-row'],
    'flex-col': ['flex', 'flex-col'],
    'justify': ['justify-center'],
    'align': ['items-center']
    // Add more grouped/alias props as needed
  },
  theme: {}
};

export default tailSafeConfig;