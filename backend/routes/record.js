const express = require ("express");
const recordRoutes = express.Router();
const  dbo = require("../db/conn");

const ObjectId =require("mongodb").ObjectId;
recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb("assignment");
    db_connect
      .collection("solution")
      .find({})
      .limit(100)
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
   });
recordRoutes.route("/record/:id").get(function(req,res){
    let db_connect =dbo.getDb();
    let myquery ={ _id: ObjectId(req.params.id)};
    db_connect
    .collection("solution")
    .findOne(myquery ,function (err ,result){
        if(err) throw err;
        res.json(result);
    });
});

module.exports = recordRoutes;