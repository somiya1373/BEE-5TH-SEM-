const express = require('express');
const app = express();
const port = 3000;

//express.static(__dirname + '/public');
app.use(express.static(__dirname+"/public"));
//app.use(express.json());
// app.get('/', (req, res) => {
//  res.sendFile(__dirname + '/index.html');
//  // res.sendFile(__dirname + './index.html');
// });
// app.get('/about', (req, res) => {
//  res.sendFile(__dirname + '/about.html'); 
// });
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});