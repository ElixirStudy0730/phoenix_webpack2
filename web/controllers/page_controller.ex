defmodule PhoenixWebpack2.PageController do
  use PhoenixWebpack2.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
