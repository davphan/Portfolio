"use strict";

// constants
const DEFAULT_PORT = 8000;

// modules
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
const app = express();

// middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// routes

// get coursework
app.get("/portfolio/:catagory", db.getCoursework);

// listen port
app.use(express.static("public"));
const PORT = process.env.PORT || DEFAULT_PORT;
app.listen(PORT);