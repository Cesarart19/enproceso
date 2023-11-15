const mysql = require('mysql')

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    serer: 3306,
    database: 'crud'
})

conection.connect( (err) => {
    if (err) throw err 
    console.log('La conexion funciona')    
    
})

conection.query('SELECT * FROM usuarios', (err, rwos) => {
   if (err) throw err 
    console.log('Losa datos de la tabla son estos')
    console.log(rwos)
})