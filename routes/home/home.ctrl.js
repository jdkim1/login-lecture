"use strict";

const main =(req, res)=>{
    res.render("home/index");
};

const login = (req, res)=>{
    res.render("home/login");

};

// 외부에서 사용할 수 있도록 Object 형태로 빼줌
module.exports = {
    main, login
};
