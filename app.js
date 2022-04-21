"use strict";

const DEFAULT_PORT = 8000;
const REQ_ERR = 400;
const SERVER_ERR = 500;

const express = require("express");
const multer = require("multer");
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const app = express();

// POST request using urlencoded
app.use(express.urlencoded({extended: true}));

// POST request using JSON
app.use(express.json());

// POST request using form-data
app.use(multer().none());