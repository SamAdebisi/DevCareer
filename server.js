import { createServer } from 'http';
import express, { json } from 'express';
import cors from 'cors'; 
import con from './mysql_file';

// let mysql = require('mysql');

// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "admin"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// var cors = require('cors')

// import 'items' from 'routes' folder
import router from './routes/items.js';

// create new app
const app = express();
app.use(express.json());

app.use(cors({origin: 'http://localhost:8100'}));

app.use('/items', router);

//Route
app.get('/',(req,res) => {
  res.send('Hey! This is a currency converter. Use it well!!!')
})
//MongoDB connection
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// mongoose.connection.once('open', () => {
//   console.log('Database connected Successfully');
// }).on('error', (err) => {
//   console.log('Error', err);
// })

//Server
// app.listen(3000, () => {
//   console.log('Server is Up')
// })
con
const server = createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);

