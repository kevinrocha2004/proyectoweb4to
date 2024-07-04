const express = require('express')
const app = express()
const router = require('./router/router')
const port = 3000

app.set('view ingine', 'ejs')
app.use(router)

app.listen(port, () => {
    console.log('servidor ejecutandose http://localhost:${port}')
    console.log('servidor ejecutandose http://localhost:',port)
})