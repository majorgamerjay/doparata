/* Set up logging */
const Logging = require('./mods/Logging.js');
const logger = new Logging.Logger(bool_fs=true);

logger.logOutput("INFO", "Started script!");

/* Set up Discord Client */
const Discord = require('discord.js');
const client  = new Discord.Client();

logger.logOutput("INFO", "Created client instance!");

const config = require('../config/config.json');
logger.logOutput("INFO", "Parsed config!");

const servers = require('../config/server_list.json');
logger.logOutput("INFO", "Parsed server list!");

client.on('ready', () => {
    logger.logOutput("SUCC", "Established connection to the client!");
});

client.login(config.token);
