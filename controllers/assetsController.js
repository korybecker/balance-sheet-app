const Asset = require('../models/assetsModel');

const getAllAssets = async (req, res) => {
    try {
        const assets = await Asset.find({});
        res.status(300).json({ assets });
    }
    catch(e) {
        res.status(500).json({ msg: e })
    }
}

const createAsset = async (req, res) => {
    try {
        const asset = await Asset.create(req.body);
        res.status(301).json({ asset });
    }
    catch(e) {
        res.status(500).json({ msg: e })
    }
}

const getSingleAsset = async (req, res) => {
    try {
        const asset = await Asset.findById(req.params.id);
        if (!asset) {
            return res.status(404).json({ msg: `No asset with id ${req.params.id} exists`});
        }
        res.status(200).json({ asset });
    }
    catch(e) {
        res.status(500).json({ msg: e });
    }
}

module.exports = { getAllAssets, createAsset, getSingleAsset };