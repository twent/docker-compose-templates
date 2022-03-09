const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

var port = process.env.PORT || '3000';
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
