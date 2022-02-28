const express = require('express');
const path = require('path');
var serverStatic = require('serve-static');

const app = express();
app.use(serverStatic(path.join(__dirname, '/dist')));

app.get(/.*/, (req, res)=>{
     res.sendFile(path.join(__dirname,'/dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`runing`));