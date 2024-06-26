const express = require('express')
let mongodb = require('mongodb')

const url = require('../url')
let mcl = mongodb.MongoClient
let router = express.Router()
router.get("/",(req,res)=>{
    mcl.connect(url,(err,conn)=>{
        if(err)
            console.log("Error in connection",err);
        else{
            let db = conn.db('nodedb');
            db.collection('products').find().toArray((err,array)=>{
                if(err)
                    console.log("Error in connection",err);
                else{
                    console.log('Data fetched')
                    res.json(array)
                    conn.close()
                }
            })
        }
    })
})

module.exports=router