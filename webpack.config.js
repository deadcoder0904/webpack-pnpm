const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");

const config = {
  entry: path.resolve(__dirname, "./app.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [new DashboardPlugin()]
};

module.exports = config;
