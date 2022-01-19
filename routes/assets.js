const express = require('express');
const router = express.Router();

const { getAllAssets, createAsset, getSingleAsset } = require('../controllers/assetsController');
router.route('/').get(getAllAssets).post(createAsset);
router.route('/:id').get(getSingleAsset);

module.exports = router;