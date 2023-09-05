// prettier.config.js
module.exports = {
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  tailwindConfig: "./tailwind.config.js",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
};
