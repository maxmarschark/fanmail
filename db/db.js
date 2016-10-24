const pgPromise = require('pg-promise');

const pg = pgPromise();

const databasURL = 'postgres://maxmarschark@localhost:5432/Signup';

const db = pg(databasURL);

module.exports = db;
