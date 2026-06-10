const mongoose = require('mongoose');

const appConfigSchema = new mongoose.Schema({
  
  // ── Ads Control ──
  ads: {
    showBannerAd: { type: Boolean, default: true },
    showInterstitialAd: { type: Boolean, default: true },
    bannerAdId: { type: String, default: '' },
    interstitialAdId: { type: String, default: '' },
  },

  // ── Dialog / Popup ──
  dialog: {
    show: { type: Boolean, default: false },
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    buttonText: { type: String, default: 'OK' },
    imageUrl: { type: String, default: '' }, // optional image
  },

  // ── Force Update ──
  update: {
    forceUpdate: { type: Boolean, default: false },
    currentVersion: { type: String, default: '1.0.0' },
    updateUrl: { type: String, default: '' },
    updateMessage: { type: String, default: 'নতুন version পাওয়া গেছে!' },
  },

  // ── Maintenance ──
  maintenance: {
    isUnderMaintenance: { type: Boolean, default: false },
    message: { type: String, default: 'সাময়িক সমস্যা চলছে, একটু পরে আসুন' },
  },

  // ── App Settings ──
  settings: {
    privacyPolicyUrl: { type: String, default: '' },
    termsUrl: { type: String, default: '' },
    whatsappNumber: { type: String, default: '' },
    telegramUrl: { type: String, default: '' },
    supportEmail: { type: String, default: '' },
  },

}, { timestamps: true });

module.exports = mongoose.model('AppConfig', appConfigSchema);