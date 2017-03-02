
# Phoenix + Webpack starter

![Screenshot](https://github.com/ElixirStudy0730/phoenix_webpack2/blob/master/screenshot.png?raw=true)


## Start with stater

```shell
git clone https://github.com/ElixirStudy0730/phoenix_webpack2.git
cd phoenix_webpack2
npm install
webpack
mix ecto.create
mix phoenix.server
```

## Change build tool in existing project

```shell
mix phoenix.new phoenix_webpack2
cd phoenix_webpack2
rm brunch-config.js
mix ecto.create
cp
...
# add package.json file
# add webpack.config.js file
# add index.html file
# add build folder
# add files in ./config folder
# change ./config/dev.exs
#     watchers: [node: ["node_modules/webpack/bin/webpack.js", "--watch", "--color"]]
#     #watchers: [node: ["node_modules/brunch/bin/brunch", "watch", "--stdin",
#                  cd: Path.expand("../", __DIR__)]]
...

npm install --save-dev webpack
npm install --save-dev extract-text-webpack-plugin
npm install --save-dev autoprefixer
npm install --save-dev copy-webpack-plugin
npm install --save-dev eslint-friendly-formatter
npm install --save-dev html-webpack-plugin
npm install --save-dev friendly-errors-webpack-plugin
npm install --save-dev eslint
mix phoenix.server
```


### Inspired by
 - http://www.jianshu.com/p/aa36b7d59734
 - https://github.com/vuejs/vue-cli
 - http://matthewlehner.net/using-webpack-with-phoenix-and-elixir/
