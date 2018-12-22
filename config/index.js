const path = require('path');

module.exports = {
    token: process.env.RSSBOT_TOKEN || "",
    socks_proxy: process.env.socks_proxy || undefined,
    db_path: process.env.RSSBOT_DB_PATH || path.join(__dirname, '../data/database.db'),
    lang: process.env.RSSBOT_lang || 'zh-cn',
    item_num: process.env.RSSBOT_ITEM_NUM || 5,
    fetch_gap: process.env.RSSBOT_FETCH_GAP || 5
};
