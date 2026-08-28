// package imports
const express = require('express')


// server Set up

const server =  express()
const PORT = 6769
const HOSTNAME = '192.168.2.63'
server.listen(PORT, HOSTNAME, () => { 
    console.log(` server is running in ${HOSTNAME}, ${PORT}`)

})

 server.get('/', (req, res) => {
     return res({
        lname: 'Ricaplaza', 
        fname: 'James',
        minitial: 'A.'
     })
 })
