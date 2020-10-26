module.exports = (fastify, opts, done) => {
    fastify.get("/dms", require('./routes/getTwitterDms'));
    fastify.get("/sid", require('./routes/sid'));

    fastify.post("/session", require('./routes/session'));

    fastify.get("/login", require('./routes/loginPage'));
    fastify.get("/", require('./routes/index'));
    done();
};