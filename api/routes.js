module.exports = (fastify, opts, done) => {
    fastify.get("/dms", require('./routes/getTwitterDms'));

    fastify.get("/login", require('./routes/loginPage'));
    fastify.post("/session", require('./routes/session'));
    done();
};