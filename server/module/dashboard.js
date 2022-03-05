const express = require('express');
const {data, data2} = require("../sampleData");
const router = express.Router();



/**
 * @description 정보 가져오기
 */
router.get("/graphData", (req, res) => {
    res.send({lineData :data, columnData : data2})
});





module.exports = router;