const express = require("express")

const port = 9090

const app = express()

app.get('/', (req, res) => {
    res.send('Happy nation')
})
app.listen(port, () => {
    console.log(`Hosting in ${port}`)
})
