module.exports = {
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "synchronize": true, //Turn this to false on production to avoid db accidental syncronizations
    "logging": false,
    "entities": [
      'dist/models/**/*.js',
    ],
    "migrations": [
      process.env.MIGRATIONS_PATH + "/**/*.ts" 
    ],
    "cli": {
      "migrationsDir":process.env.MIGRATIONS_PATH 
    },
    "ssl":true,
    "extra": {
      "ssl": {
        "rejectUnauthorized": false
      }
    }
 }