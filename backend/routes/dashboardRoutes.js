const express = require("express");
const router = express.Router();
const { registerApplication, getAllApplications, deleteApplications } = require("../controllers/dashboardController");

router.route("/").post(registerApplication);
router.route("/:id").delete(deleteApplications);
router.route("/").get(getAllApplications);

module.exports = router;