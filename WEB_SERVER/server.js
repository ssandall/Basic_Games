var express = require('express')
var app = express()
const port = process.env.PORT || 3000;
const base = `${__dirname}/FRONTEND`
app.use(express.static('FRONTEND'))

app.get('/', (req, res) => {
    res.sendFile(`${base}/typester.html`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})