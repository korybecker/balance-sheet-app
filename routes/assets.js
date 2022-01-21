const express = require("express");
const router = express.Router();

const {
  getAllAssets,
  createAsset,
  getSingleAsset,
  updateAsset,
  deleteAsset,
} = require("../controllers/assetsController");

router.route("/").get(getAllAssets).post(createAsset);
router.route("/:id").get(getSingleAsset).patch(updateAsset).delete(deleteAsset);

module.exports = router;
