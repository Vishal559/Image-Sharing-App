const express = require("express");
const router = express.Router();

const { getImages } = require("../controllers/imageController");

router.route("/images").post(getImages);

module.exports = router;
