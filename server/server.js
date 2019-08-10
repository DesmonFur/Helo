const express = require('express')
const massive = require('massive')
require('dotenv').config()
const app = express()
const session = require('express-session')
const {CONNECTION_STRING, PORT, SESSION_SECRET} = process.env 
const ctrl  = require('./controller')
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))

app.get('/posts/:userid', ctrl.getAll)
app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)

massive(CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance)
    app.listen(PORT, () => console.log( `'DINGLEBERRY CLYDI RUNNNI ${PORT} FLIES`))
})

