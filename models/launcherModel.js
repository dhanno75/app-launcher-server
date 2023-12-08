import mongoose from "mongoose";

const launcherSchema = new mongoose.Schema({
  appName: {
    type: String,
    required: true,
  },
  appConfig: {
    type: String,
    required: true,
  },
  appIcon: {
    type: String,
    required: true,
  },
});

const Launcher = mongoose.model("Launcher", launcherSchema);

export default Launcher;
