const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const user='root';
const password='secret';
const host = '172.18.0.3';
const port = 27017
const url= `mongodb://${user}:${password}@${host}:${port}`;

vaults = {
    collectionName : "vaults"
}
let client = new MongoClient(url);
const vaultDatabase = 'vault';
// Use connect method to connect to the Server

client.connect(function(err, db) {
    assert.equal(null, err);

    console.log(`Connected to server `);
    
    console.log(client.db(vaultDatabase).listCollections());
    //.createCollection(vaults.collectionName);
    //console.log(dbo.listCollections());
    //console.log(db);

    client.close();
  });

  