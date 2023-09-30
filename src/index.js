const express = require("express");
const app = express();
import Dashboard from "./Dashboard.js";
import { renderToPipeableStream } from "react-dom/server";
import React from "react";
app.get("/", (req, res) => {
  const { pipe } = renderToPipeableStream(React.createElement(Dashboard), {
    onShellReady() {
      res.setHeader("content-type", "text/html");
      pipe(res);
    },
  });
});

app.listen(9090);
console.log("listening at 9090");
