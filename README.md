# PhoenixWebpack2

To start your Phoenix app:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `npm install`
  * Start Phoenix endpoint with `mix phoenix.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix


# command lines


mix phoenix.new phoenix_webpack2
  523  cd phoenix_webpack2
  525  rm brunch-config.js
  526  npm install --save-dev webpack
  536  mix ecto.create
  537  mix phoenix.server
  543  yarn add extract-text-webpack-plugin
  545  yarn add autoprefixer
  547  yarn add copy-webpack-plugin
  549  yarn add eslint-friendly-formatter
  551  yarn add html-webpack-plugin
  553  yarn add friendly-errors-webpack-plugin
  558  yarn add eslint-loader
  560  yarn add eslint
  563  mix phoenix.server
