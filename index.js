
const { mineboty } = require("mineboty");
const config = require("./config.json");

// Increase event listener limit to avoid warning
require('events').EventEmitter.defaultMaxListeners = 20;

// Launch the bot with proper configuration
mineboty(config);
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bot is running!');
});

app.listen(3000, () => {
    console.log('Web server is running on port 3000');
});

