const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const uuid4 = require('uuid4');
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
    const seedVault = {
        id: `${uuid4()}`,
        description: 'Seed vault',
        transactions: []
    };

    client.db(vaultDatabase).collection(vaults.collectionName).insert(seedVault);
    //client.db(vaultDatabase).collection(vaults.collectionName).save();

    const result = client.db(vaultDatabase).listCollections();
    console.log(result);
    //.createCollection(vaults.collectionName);
    //console.log(dbo.listCollections());
    //console.log(db);

    client.close();
  });

  