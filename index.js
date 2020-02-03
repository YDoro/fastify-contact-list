const config = require('./config');
const fastify = require('fastify')({
    logger: true,
});

fastify.register(require('./modules'));//registering all route groups / loading all modules

fastify.listen(3000, (err, address) => {
    if (err){
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`Server listening on ${address}`);
});