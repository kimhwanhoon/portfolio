/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "400px",
        "mantine-breakpoint-sm": "640px",
        "mantine-breakpoint-md": "768px",
        "mantine-breakpoint-lg": "1280px",
        "mantine-breakpoint-xl": "1536px",
        "mantine-breakpoint-2xl": "1980px",
      },
    },
  },
};

export default config;
