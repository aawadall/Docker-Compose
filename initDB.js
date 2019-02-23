const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const user='root';
const password='secret';
const host = '127.0.0.1';
const port = 27017
const url= `mongodb://${user}:${password}@${host}:${port}`;

const client = new MongoClient(url);
const vaultDatabase = 'vault';
// Use connect method to connect to the Server

client.connect(function(err, db) {
    assert.equal(null, err);

    console.log(`Connected to server `);
    console.log(db);

    client.db(vaultDatabase);

    client.close();
  });

  