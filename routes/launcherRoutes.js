import express from "express";
import {
  createApp,
  deleteAnApp,
  getAllApps,
  updateAnApp,
} from "../controllers/launcherController.js";

const router = express.Router();

router.route("/").post(createApp).get(getAllApps);
router.route("/:id").delete(deleteAnApp).put(updateAnApp);

export default router;
