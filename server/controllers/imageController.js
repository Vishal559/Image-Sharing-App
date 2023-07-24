const Image = require("../models/image");

exports.getImages = async (req, res) => {
  try {
    const resultPerPage = 9;
    const totalcountProduct = await Image.countDocuments();
    const currentPage = req.query.page;
    const skipVal = (currentPage - 1) * resultPerPage;
    const Images = Images.find({}).limit(resultPerPage).skip(skipVal);
    res.status(200).send({
      message: "success",
      Images,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "something went wrong !!",
    });
  }
};
