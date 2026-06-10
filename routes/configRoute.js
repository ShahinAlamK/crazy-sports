const express = require('express');
const router = express.Router();
const {
  getConfig,
  updateConfig,
  updateAds,
  updateDialog,
  updateForceUpdate,
  updateMaintenance,
  updateSettings
} = require('../controllers/configController');

router.get('/', getConfig);
router.put('/', updateConfig);
router.patch('/ads', updateAds);
router.patch('/dialog', updateDialog);
router.patch('/update', updateForceUpdate);
router.patch('/maintenance', updateMaintenance);
router.patch('/settings', updateSettings);

module.exports = router;