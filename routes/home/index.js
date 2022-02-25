"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

// path, controller( main )
router.get('/', ctrl.main);

// path, controller( login )
router.get('/login', ctrl.login);

// 외부에서 사용할 수 있도록 빼줌
module.exports = router;