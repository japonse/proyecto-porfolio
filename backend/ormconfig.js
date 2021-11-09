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
      "dist/models/**/*.js" //This is the transpiled one folder
    ],
    "migrations": [
      "src/migrations/**/*.ts" //This is the NOT-transpiled one folder
    ],
    "cli": {
      "migrationsDir":"src/migrations" //This is the NOT-transpiled one folder
    },
    "ssl":true,
    "extra": {
      "ssl": {
        "rejectUnauthorized": false
      }
    }
 }