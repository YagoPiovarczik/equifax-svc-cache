// cache-config.js - Redis 7
module.exports = {
  host: process.env.REDIS_HOST,
  port: 6379,
  version: '7.0',
  cluster: true,
  maxRetries: 3
};
