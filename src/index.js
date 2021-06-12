const Logging = require('./mods/Logging.js');
const logger = new Logging.Logger(bool_fs=true);

logger.logOutput("WARN", "Lol");
logger.logOutput("ERR", "Nice error");
logger.logOutput("INFO", "Ebic Info");
logger.logOutput("SUCC", "BIG SUCC");
