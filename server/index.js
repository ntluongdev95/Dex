const express =require('express')
const path = require('path')

const app = express()

const buildDir = path.join(__dirname,'../build')
const subDir ='/'
const logRequests = false

app.use(subDir, express.static(buildDir))

app.get('*',(req,res)=>{
    if(logRequests){
        console.log(req.method + '' + req.url);
    }
    res.sendFile(path.join(buildDir,'index.html'))
})

app.listen(process.env.PORT || 3000)
console.log('react app is runing on the port 3000');