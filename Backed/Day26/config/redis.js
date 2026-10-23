const redis = require('redis');
const redisClient = redis.createClient(
    {
    username: 'default',
    password: 'XKRRkzDBsOD9XlhdagDSNdhVIiRS5Dzl',
    socket: {
        host: 'efficacious-microprecise-professional-64284.db.redis.io',
        port: 12437
    }
}
);


module.exports = redisClient;