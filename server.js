var http = require( "http" );
var express = require( "express" );
var app = require( "./config/express" )(app);
var config = require('./config/config')();

require( "./config/passport" )();
require( "./config/database.js" )( config.db );

http.createServer( app ).listen( app.get( "port" ), function() {
    console.log( "Express server escutando na porta " + 
                 app.get( "port" ) );
});