const Asset = require("../models/assetsModel");

const getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.find({});
    res.status(200).json({ assets: assets, status: "success" });
  } catch (e) {
    res.status(500).json({ msg: e, status: "failure" });
  }
};

const createAsset = async (req, res) => {
  try {
    const asset = await Asset.create(req.body);
    res.status(201).json({ asset: asset, status: "success" });
  } catch (e) {
    res.status(500).json({ msg: e, status: "failure" });
  }
};

const getSingleAsset = async (req, res) => {
  try {
    const { id: assetID } = req.params;
    const asset = await Asset.findOne({ _id: assetID });
    if (!asset) {
      return res
        .status(404)
        .json({ msg: `No asset with id ${assetID} exists` });
    }
    res.status(200).json({ asset: asset, status: "success" });
  } catch (e) {
    res.status(500).json({ msg: e, status: "failure" });
  }
};

const updateAsset = async (req, res) => {
  try {
    const { id: assetID } = req.params;
    // include options to json new asset and not old
    const asset = await Asset.findOneAndUpdate({ _id: assetID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!asset) {
      return res.status(404).json({ msg: `No asset with id ${id}` });
    }
    res.status(200).json({ asset: asset, status: "success" });
  } catch (e) {
    res.status(500).json({ msg: e, status: "failure" });
  }
};

const deleteAsset = async (req, res) => {
  try {
    const { id: assetID } = req.params;
    const asset = await Asset.findOneAndDelete({ _id: assetID });
    if (!asset) {
      return res.status(404).json({ msg: `No asset with id ${assetID}` });
    }
    res.status(200).json({ asset: null, status: "success" });
  } catch (e) {
    res.status(500).json({ msg: e, status: "failure" });
  }
};

module.exports = {
  getAllAssets,
  createAsset,
  getSingleAsset,
  updateAsset,
  deleteAsset,
};
