const express = require('express')
const mongodb = require('mongodb')
const router = express.Router()
const url = require('../url')
const mcl = mongodb.MongoClient

router.post('/',(req,res)=>{
    let obj = req.body;
    mcl.connect(url,(err,conn)=>{
        if(err)
            console.log("Error in connecting..",err);
        else{
            let db=conn.db('nodedb');
            db.collection('products').insert(obj,(err)=>{
                if(err)
                    console.log("Error in inserting record..",err);
                else{
                    console.log("Data inserted")
                    res.json({'insert':'success'})
                    conn.close()
                }
            })
        }
    })
})
module.exports = router