const Liabs = require("../models/liabilitiesModel");

// get all liabilities controller
const getAllLiabs = async (req, res) => {
  try {
    // save all liabilities to liab
    const liab = await Liabs.find({});
    res.status(200).json({ liabilities: liab, status: "success" });
  } catch (e) {
    res.status(500).json({ msg: e, status: "failure" });
  }
};

const createLiab = async (req, res) => {
  try {
    const liab = await Liabs.create(req.body);
    res.status(201).json({ liability: liab, status: "success" });
  } catch (e) {
    res.status(500).json({ msg: e, status: "failure" });
  }
};

const getSingleLiab = async (req, res) => {
  try {
    // save query parameter "id" to liabID
    const { id: liabID } = req.params;
    const liab = await Liabs.findOne({ _id: liabID });
    if (!liab) {
      return res
        .status(404)
        .json({ msg: `No liability with id ${liabID} exists` });
    }
    res.status(200).json({ liability: liab, status: "success" });
  } catch (e) {
    res.status(500).json({ msg: e, status: "failure" });
  }
};

const updateLiab = async (req, res) => {
  try {
    const { id: liabID } = req.params;
    //                                    find by id     update params
    const liab = await Liabs.findOneAndUpdate({ _id: liabID }, req.body, {
      // options
      new: true,
      runValidators: true,
    });
    if (!liab) {
      return res
        .status(404)
        .json({ msg: `No liability with id ${liabID} exists` });
    }
    res.status(200).json({ liability: liab, status: "success" });
  } catch (e) {
    res.status(500).json({ msg: e, status: "failure" });
  }
};

const deleteLiab = async (req, res) => {
  try {
    const { id: liabID } = req.params;
    const liab = await Liabs.findOneAndRemove({ _id: liabID });
    if (!liab) {
      return res
        .status(404)
        .json({ msg: `No liability with id ${liabID} exists` });
    }
    res.status(200).json({ liab: null, status: "success" });
  } catch (e) {
    res.status(500).json({ msg: e, status: "failure" });
  }
};

module.exports = {
  getAllLiabs,
  getSingleLiab,
  createLiab,
  updateLiab,
  deleteLiab,
};
