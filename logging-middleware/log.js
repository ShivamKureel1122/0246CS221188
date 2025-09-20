const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  FATAL: 4,
}

let currentLogLevel = LOG_LEVELS.INFO

function createLogger (level) {
  return function(args) {
    if (level >= currentLogLevel) {
      const timestamp = new Date().toISOString();
      const levelName = Object.keys(LOG_LEVELS).find(key => LOG_LEVELS[key] === level);
      console.log(`[${timestamp}]\n[${levelName}]\nstack: ${args.stack}\npackage: ${args.packageName}\nmessage recieved: ${args.message}`)
    }
  }
}

const logger = {
  debug: createLogger(LOG_LEVELS.DEBUG),
  info: createLogger(LOG_LEVELS.INFO),
  warn: createLogger(LOG_LEVELS.WARN),
  error: createLogger(LOG_LEVELS.ERROR),
  fatal: createLogger(LOG_LEVELS.FATAL),
};


const Log = (stack, level, packageName, message) => {
    currentLogLevel = LOG_LEVELS[level.toUpperCase()]
    logger[level]({
        stack: stack, 
        packageName: packageName, 
        message: message,
    })
}

// Log("backend", "error", "handler", "recieved string, expected bool")

export default Log