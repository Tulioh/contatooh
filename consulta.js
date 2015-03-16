var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

var _idProcurado = new ObjectID( "54ea16226b4db5a3e39a70a8" );

MongoClient.connect( "mongodb://127.0.0.1:27017/contatooh",
    function( erro, db ) {
        if( erro ) throw err;

        db.collection( "contatos" ).findOne( {_id : _idProcurado},
            function( erro, contato ) {
                if( erro ) throw erro;
                console.log( contato );
            });
    });