const AppConfig = require('../schema/configSchema');

// Get Config (সবসময় একটাই থাকবে)
exports.getConfig = async (req, res, next) => {
  try {
    let config = await AppConfig.findOne();
    if (!config) {
      config = await AppConfig.create({});
    }
    res.json(config);
  } catch (error) {
    next(error);
  }
};

// Update Full Config
exports.updateConfig = async (req, res, next) => {
  try {
    let config = await AppConfig.findOne();
    if (!config) {
      config = await AppConfig.create(req.body);
    } else {
      config = await AppConfig.findByIdAndUpdate(config._id, req.body, { new: true, runValidators: true });
    }
    res.json(config);
  } catch (error) {
    next(error);
  }
};

// Update Ads Only
exports.updateAds = async (req, res, next) => {
  try {
    const config = await AppConfig.findOneAndUpdate(
      {},
      { ads: req.body },
      { new: true, upsert: true }
    );
    res.json(config);
  } catch (error) {
    next(error);
  }
};

// Update Dialog Only
exports.updateDialog = async (req, res, next) => {
  try {
    const config = await AppConfig.findOneAndUpdate(
      {},
      { dialog: req.body },
      { new: true, upsert: true }
    );
    res.json(config);
  } catch (error) {
    next(error);
  }
};

// Update Force Update Only
exports.updateForceUpdate = async (req, res, next) => {
  try {
    const config = await AppConfig.findOneAndUpdate(
      {},
      { update: req.body },
      { new: true, upsert: true }
    );
    res.json(config);
  } catch (error) {
    next(error);
  }
};

// Update Maintenance Only
exports.updateMaintenance = async (req, res, next) => {
  try {
    const config = await AppConfig.findOneAndUpdate(
      {},
      { maintenance: req.body },
      { new: true, upsert: true }
    );
    res.json(config);
  } catch (error) {
    next(error);
  }
};

// Update Settings Only
exports.updateSettings = async (req, res, next) => {
  try {
    const config = await AppConfig.findOneAndUpdate(
      {},
      { settings: req.body },
      { new: true, upsert: true }
    );
    res.json(config);
  } catch (error) {
    next(error);
  }
};