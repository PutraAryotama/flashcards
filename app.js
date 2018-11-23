const express = require('express');

app = express();

app.get('/', (request, response)=>{
  response.send('I love Treehouse');
});

app.listen(3000);
