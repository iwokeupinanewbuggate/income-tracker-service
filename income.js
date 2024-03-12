const express = require("express")
const connect = require("./database/db")
const userRouter = require("./router/useRouter")
const cors = require("cors")
const transactionRoute = require("./router/transaction")

const port = 9090
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

connect()
app.use(userRouter)
app.use(transactionRoute)


app.get('/', (req, res) => {
    res.send('Happy nation')
})
app.listen(port, () => {
    console.log(`Hosting in ${port}`)
})
