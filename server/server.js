let express  = require('express');
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser');
let books = null;
let id = 0;
app.use(bodyParser.json());
app.use('/book',function (req, res, next) {
  id = req.query.id;
  fs.readFile('./books.json','utf8',function (err, data) {
    if(err || data.length===0){
      books= [];
    }else {
      books = JSON.parse(data);
    }
    next();
  })
});
app.get('/book',function (req, res) {
  if(req.query.id){
    res.send(books.find(item=>item.id===req.query.id));
  }else {
    res.send(books);
  }
});
app.post('/book',function (req, res) {
  req.body.id = books.length === 0?1:parseInt(books[books.length-1].id)+1;
  books.push(req.body);
  fs.writeFile('./books.json',JSON.stringify(books),function (err) {
    res.send(req.body);
  })
});
app.delete('/book',function (req, res) {
  let id = req.query.id;
  books = books.filter(item=>id!==item.id);
  fs.writeFile('./books.json',JSON.stringify(books),function (err) {
    res.send({});
  })
});
app.put('/book',function (req, res) {
  let id1 = req.query.id;
  books = books.map(item=>{
    if(item.id=== id1){
      return req.body;
    }else {
      return item;
    }
  });
   fs.writeFile('./books.json',JSON.stringify(books),function (book) {
     res.send(req.body);
   })
});
app.all("*",function (req, res) {
  res.send(404);
});
app.listen(8000);
