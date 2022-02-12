const express = require('express');
const db = require('../db');
const bcryptjs = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");


/**
 * @description 회원가입
 */
router.post("/signup", (req, res) => {

});



/**
 * @description 정보 가져오기
 */
router.get("/me", (req, res) => {
    res.send({key :'123123'})
});



module.exports = router;