const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  getAllUsers,
  getUserById,
  getMentors,
  getMentorsByCompany,
  getMentorsByUni,
  getMentorsByTechstack,
} = require("../controllers/userController");

router.route("/").post(registerUser);

router.route("/login").post(authUser);

router.route("/").get(getAllUsers);
router.route("/mentor").get(getMentors);
router.route("/:id").get(getUserById);
router.route("/mentor/company/:company").get(getMentorsByCompany);
router.route("/mentor/uni/:uni").get(getMentorsByUni);
router.route("/mentor/techstack/:techstack").get(getMentorsByTechstack);

module.exports = router;
