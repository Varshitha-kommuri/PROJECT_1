const express = require('express')
let  router = express.Router()
const mongodb = require('mongodb')
const mcl = mongodb.MongoClient
const url = require('../url')

router.put('/',(req,res)=>{
    let p_id = req.body.p_id;
    let obj={
        'p_name':req.body.p_name,
        'p_cost':req.body.p_cost
    }
    mcl.connect(url,(err,conn)=>{
        if(err)
            console.log("Error in connection",err);
        else{
            let db = conn.db('nodedb');
            db.collection('products').updateOne({p_id},{$set:obj},(err,result)=>{
                if(err)
                    console.log("error in updating the record",err);
                else{
                    console.log("record updated");
                    res.json({"upadte":"success"})
                    
                }
                conn.close()
            })
        }
    })
})

module.exports = router