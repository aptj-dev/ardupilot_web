// server.js
import qs from "query-string";
import {renderToString} from "react-dom/server";
import { renderApp } from "./app";

// render the main app component into an html page
function getMarkup(appComponent) {
  var markup = renderToString(appComponent)

  return `<!doctype html>
    <html>
      <head>
        <title>Redux Auth – Isomorphic Example</title>
      </head>
    <body>
      <div id="react-root">${markup}</div>
      <script src="/path/to/my/scripts.js"></script>
    </body>
  </html>`;
}

// this function will differ depending on the serverside framework that
// you decide to use (express, hapi, etc.). The following example uses hapi
server.ext("onPreResponse", (request, reply) => {
  var query = qs.stringify(request.query);
  var currentLocation = request.path + (query.length ? "?" + query : "");
  var cookies = request.headers.cookies;

    renderApp({
	isServer: true,
	cookies,
	currentLocation
    }).then(appComponent => {
      reply(getMarkup(appComponent));
    });
}
