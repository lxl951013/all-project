//引入webpack    require()
var webpack=require('webpack');

//导出模块   module.exports
module.exports={
	//用于调试，告知错误发生地点
	devtool:"source-map",
	//导入文件，入口文件 最好指向根目录下的一个js文件
	entry:__dirname+"/main.js",
	//导出文件（处理后的文件）
	output:{
		//导出文件的放置位置
		path:__dirname+"/public",
		//导出文件的文件名
		filename:"bundle.js",
	},
	//兼容Vue2.0
	resolve:{
		alias:{
			vue:'vue/dist/vue.js'
		}
	},
	//加载器 loader 将文件转换为js格式
	module:{
		loaders:[{
			//匹配js后缀的文件，把它转化为JS等格式
			//cnpm install --save-dev babel-loader
			//cnpm install --save-dev babel-core babel-preset-es2015 //安装babel  实现 ES6 到 ES5
			test:/\.js$/,
			loader:"babel-loader",
		},{
			//cnpm install html-loader
			test:/\.html$/,
			loader:"html-loader",
		},{
			//cnpm install vue-template-compiler,cnpm install vue-loader
			test:/\.vue/,
			loader:"vue-loader",
		},{
			//cnpm install style-loader ,cnpm install css-loader
			test: /\.css$/ ,
			loader: "style-loader!css-loader"
		},{
			//cnpm install node-sass,cnpm install sass-loader
			test:/\.scss/,
			loader:"sass-loader",
		},{
			//cnpm install less ,cnpm install less-loader
			test:/\.less/,
			loader:"less-loader",
		},{
			//cnpm install url-loader,cnpm install file-loader
			test:/\.(jpg|png|gif|jpeg)$/ ,
			loader:"url-loader",
		},{
			//cnpm install file-loader
			test: /\.(ttf|svg|woff|eot)$/,
			loader: "file-loader"
		}]
	},
	//配置服务器
	devServer:{
		//服务器文件夹
		contentBase:"./public",
		//端口设置
		//port:54123,
		//实时更新
		inline:true
	},
	plugins: [
        //代码压缩
        new webpack.optimize.UglifyJsPlugin()
    ]
}
