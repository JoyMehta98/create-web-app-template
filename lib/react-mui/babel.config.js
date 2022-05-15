module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    [require.resolve("babel-preset-react-app"), { runtime: "automatic" }],
  ],
  plugins: [require.resolve("babel-plugin-lodash")],
};
