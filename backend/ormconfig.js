module.exports = {
    "type": "postgres",
    "url": process.env.DB_URL,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "synchronize": false, //Turn this to false on production to avoid db accidental syncronizations
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