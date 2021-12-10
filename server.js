const express      = require('express')
const path         = require('path')
const http         = require('http')

const port         = process.env.PORT || 3300;
const app          = express()

app.use(express.static('files'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
} )

app.set('port', port)
const server = http.createServer(app)

server.listen(port, () => console.log(`Server run ${port}`))