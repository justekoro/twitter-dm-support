module.exports = (fastify, opts, done) => {
    fastify.get("/dms", require('./routes/getTwitterDms'))
    done();
};