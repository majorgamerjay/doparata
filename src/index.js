/* Set up logging */
const Utilities = require('./mods/Utilities');
const Logging = require('./mods/Logging');

const logger = new Logging.Logger(bool_fs=true);

logger.logOutput("INFO", "Started script!");

/* Set up Discord Client */
const Discord = require('discord.js');
const client  = new Discord.Client();

logger.logOutput("INFO", "Created client instance!");

const config = require('../config/config.json');
logger.logOutput("INFO", "Parsed config!");

const servers = require('../config/server_list.json').servers;
logger.logOutput("INFO", "Parsed server list!");

if (servers.length < 2)
    Utilities.killMyself(23, "Stuff less than 2 bruv");

client.on('ready', () => {
    logger.logOutput("SUCC", "Established connection to the client!");

    const serverCache = client.guilds.cache;

    server_members = new Array(servers.length);

    for(let k = 0; k < servers.length; ++k)
        server_members[k] = new Array();

    let i = 0;
    servers.forEach(perServer => {
        logger.logOutput("INFO", `Getting members of ${i}. ${perServer}`);
        serverCache.get(perServer).members.cache.each(perMember => {
            server_members[i].push(perMember.user.id);
        });
        ++i;
    });

    const accumulation = [];

    Utilities.battleRoyale(server_members, accumulation);

    console.log(accumulation);
});

client.login(config.token);
