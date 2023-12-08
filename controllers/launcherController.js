import Launcher from "../models/launcherModel.js";

export const createApp = async (req, res, next) => {
  try {
    const { appName, appConfig, appIcon } = req.body;
    const newApp = await Launcher.create({
      appName,
      appConfig,
      appIcon,
    });

    res.status(201).json({
      status: "success",
      data: newApp,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong, please try after sometime.",
    });
  }
};

export const getAllApps = async (req, res, next) => {
  try {
    const apps = await Launcher.find();

    res.status(201).json({
      status: "success",
      data: apps,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong, please try after sometime.",
    });
  }
};

export const deleteAnApp = async (req, res, next) => {
  try {
    await Launcher.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong, please try after sometime.",
    });
  }
};

export const updateAnApp = async (req, res, next) => {
  try {
    const updatedApp = await Launcher.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: updatedApp,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong, please try after sometime",
    });
  }
};
