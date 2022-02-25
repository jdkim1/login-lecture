"use strict";

const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");

// 앱 셋팅
// 화면 View 처리 엔진 설정
app.set("views", "./views");
app.set("view engine","ejs");   // 화면 해석 엔진(ejs) 설정
app.use("/", home); // 미들웨어를 등록하는 메소드

module.exports = app;