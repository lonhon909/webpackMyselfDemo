const path = require('path');


module.exports = {
    entry: ["./src/index.js", "./src/main.js"],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist'),
    }
};
