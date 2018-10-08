import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from ".";
import template from './template';

const app = express();

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", (req, res) => {
  const context = { };
  const jsx = (
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>
  );
  const reactDom = renderToString(jsx);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(template(reactDom));
});

app.listen(3000);