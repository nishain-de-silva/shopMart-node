const express = require('express')
const food = require("./routes/food");
const app = express()
app.use('/food', food)

app.listen(5000, () => {
    console.log("server started")
})
