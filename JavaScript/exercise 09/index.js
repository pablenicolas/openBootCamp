const winston = require('winston');
const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
   ],
});

function error(){
    console.log("Hola Gorka")
    throw new Error ("Aqui hay un error")
}


try {
    // Codigo que puede fallar
      error()
} catch(e){
    // En caso de fallar quiero que ejecutes
    logger.error("Error guardado")
} 
