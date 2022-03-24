const { db: { username, password, database, host }, } = require('./index');

const client = new Client({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false }
})

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  }
};
