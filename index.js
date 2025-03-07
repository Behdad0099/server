
const { mineboty } = require("mineboty");
const config = require("./config.json");

// Increase event listener limit to avoid warning
require('events').EventEmitter.defaultMaxListeners = 20;

// Launch the bot with proper configuration
mineboty(config);
