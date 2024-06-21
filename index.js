const express = require('express');

const server = express();

server.get('/',(req, res)=>{
    res.send('first express program');
});

module.exports = {server};



// // Import the necessary modules here
// const express = require('express');
// // Write your code here

// const server =  express();
// server.get('/', (req, res)=>{
//     res.send("first express program.");
// });

// module.exports = { server };
