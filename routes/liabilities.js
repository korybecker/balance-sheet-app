const express = require("express");
const router = express.Router();

const {
  getAllLiabs,
  getSingleLiab,
  createLiab,
  updateLiab,
  deleteLiab,
} = require("../controllers/liabilitiesController");

router.route("/").get(getAllLiabs).post(createLiab);
router.route("/:id").get(getSingleLiab).patch(updateLiab).delete(deleteLiab);

module.exports = router;
