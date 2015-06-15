//REQUIRE CLASS
var mysql = require('mysql');
var queries = require('./queries');

var dbConfig = {
	host : 'localhost',
	user : 'root',
	password : 'root1234',
	database : 'db_prueba'
};

var runQuery = function (Query, Data, callback) {
	var connection = mysql.createConnection(dbConfig);
	connection.connect( function ( err ){
		if ( err ) throw err;
	});

	connection.query(Query, Data, function ( err, res ){
		if ( err ) throw err;
		if( callback ) {
			callback(res);
		}
	});
	connection.end; 
};

///MODULE
var DB = function (config) {
	config = config || {};
};

DB.prototype.getData = function(data, callback) {
	var query = queries.GETDATA;
	var data = [data];
	runQuery(query, data, function(res) {
		res = res.pop();
		callback(res);
	});
};

DB.prototype.saveData = function(data) {
	var query = queries.SAVEDATA;
	var data = data;
	runQuery(query, data);
};

module.exports = DB;

