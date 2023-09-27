const Vdostreaming = require("../models/data-table");

exports.fetchAll = async (req, res, next) => {
  try {
    const result = await Vdostreaming.find();

    if (result.length > 0) {
      res
        .status(200)
        .json({ message: "Data fetched successfully", data: result });
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error while fetching data", error: err });
  }
};

exports.uploadTextdata = async (req, res, next) => {
  // console.log(req.body);
  try {
    const newTextData = await Vdostreaming({
      content: req.body.content,
      contentType: req.body.contentType,
      size: req.body.size,
      position: req.body.position,
    });
    const savedTextData = await newTextData.save();

    if (savedTextData) {
      res
        .status(200)
        .json({ message: "Data added successfully", data: savedTextData });
    } else {
      res.status(404).json({ message: "Unable to add data" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error while adding data", error: err });
  }
};
