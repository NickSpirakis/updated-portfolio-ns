//import
const express = require('express')
const app = express()
const port = 3000


//new-path
var path = require('path')
var cons = require('consolidate')


//new idea, router
//const router = express.Router()
//router.get('/views',function(req,res){
  //  res.sendFile(path.join(__dirname+'/sprint2.html'));
//});


//app.use(express.static(__dirname + 'app'))
app.use(express.static('appHold'))
app.use('/app', express.static(__dirname + 'appHold/app'))


app.get('/appHold', (req, res) => {
    res.render(__dirname + 'app.html')
})


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))



//THIS IS THE WORKING ONE
app.use(express.static('views'))
app.use('/sprint2', express.static(__dirname + 'views/sprint2'))
app.use('/sprint3', express.static(__dirname + 'views/sprint3'))
app.use('/sprint4', express.static(__dirname + 'views/sprint4'))
app.use('/sprint5', express.static(__dirname + 'views/sprint5'))
app.use('/sprint6', express.static(__dirname + 'views/sprint6'))
app.use('/sprint7', express.static(__dirname + 'views/sprint7'))


//app.set('views', './views')   old
//allows you to set html as view engine
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')


//app.engine('html', require('ejs').renderFile)   old

//end new

//this might change



//app.use('/', router)
app.listen(port, () => console.info('Listening on port 3000'))


//var http = require('http');
  //  var fs = require('fs');
 
    //var server = http.createServer(function(req,res) {
      //  console.log('request was made: '+ req.url);
        //res.writeHead(200, {'Content-Type': 'text/html'});
       // var myReadStream = fs.createReadStream(__dirname + '/app.html','utf-8');
       // myReadStream.pipe(res);
   // });
 
// server.listen(3000,'127.0.0.1');
// console.log('Now listening on port 3000');