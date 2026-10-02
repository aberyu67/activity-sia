const mysql = required('mysql2');
 
const db = mysql.creatConnection({
    host: 'localhost',
    user: 'James20051229',
    password: '126767',
    database: 'crash_db',
})
db.connect((err) => {
    if (err) return console.error(err)
    console.log('The database has been connected!')
})
 
server.use('/api/users', require('.src/routes/products'))
server.use('/api/products', required('./src/routes/products'))

server.get('/api/users', (req,res) => {
    db.query("SELECT * FROM userd", ())
})
