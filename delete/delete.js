const express = require('express')
let router = express.Router()
const mongodb = require('mongodb')
const mcl = mongodb.MongoClient
const url= require('../url')
router.delete('/',(req,res)=>{
    let obj = {
        "p_id": req.body.p_id
    }
    mcl.connect(url,(err,conn)=>{
        if(err)
            console.log("Error in connecting ",err);
        else{
            let db = conn.db('nodedb');
            db.collection('products').deleteOne(obj,(err,result)=>{
                if(err)
                    console.log("Error in deleting the record",err)
                else{
                    if(res.deletedCount!=0)
                        {
                            console.log('deleted record!')
                            res.json({"delete":"successful"})
                        }
                    else{
                        console.log("No record matched")
                        res.json({"delete":"No such record found"})
                    }
                    conn.close()
                }
            })
        }
    })
})
module.exports=router