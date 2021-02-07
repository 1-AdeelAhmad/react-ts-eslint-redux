const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const HtmlPlugin = new HtmlWebPackPlugin({
     template: "./src/index.html",
});

module.exports = {
     entry: "./src/index.tsx",
     target: "web",
     mode: 'development',
     module: {
          rules: [
               {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
               },
          ],
     },
     resolve: {     
          extensions : [".tsx", ".ts", ".js",".jsx","json"],
     },
     output: {
          filename: "bundle.js",
          path: path.resolve(__dirname, "dist"),
     },
     plugins: [HtmlPlugin],
     devServer: {
          contentBase: path.join(__dirname, 'dist'),
          compress: true,
          port: 3000
        }
};