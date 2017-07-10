const express =  require('express');
const app = express();




app
  .get('/',(req,res)=>{
    res.sendfile(__dirname + '/src/index.html');
  })
  .get('/:name', (req,res)=>{
  res.sendfile(__dirname + '/src/dash.html')
  })

const server = app.listen(3000, ()=>{
  const host = server.address().address;
  const port = server.address().port;
});
