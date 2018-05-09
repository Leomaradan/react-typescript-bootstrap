const path = require('path');
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map', 
    watch: false,
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    } ,   
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },    
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },            
        ]
    },
};