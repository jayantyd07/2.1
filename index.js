const {MongoClient} = require('mongodb')

async function main(){
    const url ="mongodb://127.0.0.1:27017"
    const client = new MongoClient(url);

    var dbo = client.db("UIC");
    console.log(dbo.databaseName);
    await client.connect();
    var myobj = [{ name: "SamartRaj Singh", uid:"22MCA20726"},{ name: "SamartRaj Singh", uid:"22MCA20726"},{ name: "SamartRaj Singh", uid:"22MCA20726"},
    { name: "SamartRaj Singh", uid:"22MCA20726"}];
    dbo.collection("STUDENT DATA").insertMany(myobj);
    console.log("collection created !");

    
}
main().catch(console.error);