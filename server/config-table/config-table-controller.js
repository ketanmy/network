"use strict";

var mongodbClient = require("mongodb").MongoClient;
//var url = 'mongodb://localhost:27017/network';
var url = 'mongodb://admin:admin@ds031912.mlab.com:31912/network';

class configTable{
	constructor(){
		console.log("Loaded config table controller");
	}

	load(req, res){
		console.log("Loaded config table method");

		mongodbClient.connect(url, function(err, db){
			if(err){
				console.log('ERROR ! while loaded document from config table collection');

				res.send({
					"ERROR" : "while loaded document from config table collection"
				});
			}
			else{

				var configTableCollection = db.collection('config');

				var configTable = {
					"id" : 3,
					"name" : "Other",
					"groupid" : 1
				};


				configTableCollection.insert([configTable], function(err, result){
					if(err){
						console.log("Error while insert document");
					}
					else{
						console.log("insert row %s", result.length);
					}

				});

				res.send(configTable);

				
				db.close();				
			}
		})	
	}
}

module.exports = configTable;