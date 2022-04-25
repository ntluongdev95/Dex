const express =require('express')

const app = express()

app.listen(process.env.PORT || 3000)
console.log('react app is runing on the port 3000');