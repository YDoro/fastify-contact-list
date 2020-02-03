//Here i'll export all route groups with their prefixes

module.exports = (fastify,_,done)=>{
    fastify.register(require('./users/user.routes'),{prefix:'/users'});
    done();
};