let express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
let app = express() //rest obj
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
//create port
let port = process.env.PORT || 3000
//import fetch insert update delete modules
let fetch = require('./fetch/fetch')
let insert = require('./insert/insert')
let update = require('./update/update')
let remov = require('./delete/delete')
//use above modules
app.use("/fetch", fetch)
app.use("/insert", insert)
app.use("/update", update)
app.use("/delete", remov)
//assign port no
app.listen(port, () => {
    console.log("Server listening port no:- ", port)
})
