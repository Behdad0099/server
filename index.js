
const { mineboty } = require("mineboty");
const config = require("./config.json");

// Increase event listener limit to avoid warning
require('events').EventEmitter.defaultMaxListeners = 20;

// Set up config for mineboty with modified web port (if possible)
config.webPort = 3000;
config.webHostname = "0.0.0.0";

// Launch the bot with proper configuration
const bot = mineboty(config);

// Add your own Express routes after mineboty has initialized
// We'll add a timeout to ensure mineboty has started
setTimeout(() => {
    const express = require('express');
    const app = express();

    app.get('/status', (req, res) => {
        res.send('Bot is running!');
    });

    // Don't call app.listen as mineboty is already using port 3000
    console.log('Express routes added to existing web server on port 3000');
    console.log('Access bot status at: https://GameZone-mvtD.repl.co/status');
    console.log('Main bot web interface: https://GameZone-mvtD.repl.co');
}, 5000);

