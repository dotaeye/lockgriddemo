module.exports = {
  username: 'root',
  password: '4abe68fc',
  database: 'lockgriddemo',
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
  logging: true,
  timezone: '+08:00',
  pool: {
    max: 1300,
    min: 1,
    idle: 30000,
    maxIdleTime: 30
  }
}
