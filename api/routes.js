module.exports = (fastify, opts, done) => {
    fastify.get("/dms", require('./routes/getTwitterDms'));

    fastify.post("/session", require('./routes/session'));

    fastify.get("/login", require('./routes/loginPage'));
    fastify.get("/", require('./routes/index'));
    done();
};