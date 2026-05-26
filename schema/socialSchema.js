const val = require('mongoose');

const socialSchema = new val.Schema({
    telegram: { type: String, default: 'https://t.me/crazy_sports' },
    instagram: { type: String, default: 'https://www.instagram.com/crazy_sports_/' },
    facebook: { type: String, default: 'https://www.facebook.com/profile.php?id=100089441086644' },
    twitter: { type: String, default: 'https://twitter.com/CrazySports_' }
}, {
    versionKey: false
})

module.exports = val.model('Social', socialSchema);