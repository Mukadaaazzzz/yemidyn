const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle name
    path: path.resolve(__dirname, "dist"), // Output directory
    publicPath: "/", // Public URL of the output directory
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Resolve these extensions
    alias: {
      "@components": path.resolve(__dirname, "src/components/"), // Example alias
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Test for .ts and .tsx files
        use: "ts-loader", // Use ts-loader to transpile TypeScript
        exclude: /node_modules/, // Exclude node_modules directory
      },
      {
        test: /\.css$/, // Test for .css files
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Extract CSS to separate file
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Test for image files
        type: "asset/resource", // Output as resource
        generator: {
          filename: "images/[name][ext]", // Specify output directory for images
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Test for font files
        type: "asset/resource", // Output as resource
        generator: {
          filename: "fonts/[name][ext]", // Specify output directory for fonts
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean output directory before each build
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template HTML file
      filename: "index.html", // Output HTML file
      inject: "body", // Inject script tags into the body
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", // Extract CSS to separate file
    }),
  ],
  devtool: "source-map", // Generate source maps for debugging
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Serve content from the dist directory
    compress: true, // Enable gzip compression
    port: 3000, // Specify port
    historyApiFallback: true, // Fallback to index.html for SPA routing
  },
};
