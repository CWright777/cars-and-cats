var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
  console.log('client request URL: ', request.url);
  if(request.url === '/cars'){
    fs.readFile('./views/index.html','utf8', function (errors,contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  } else if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css',function (errors,contents){
      response.writeHead(200, {'Content-type': 'text/css'});
      response.write(contents);
      response.end();
    });
  } else if(request.url === '/images/tesla.jpg'){
    fs.readFile('./images/tesla.jpg',function (errors,contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  } else if(request.url === '/cats'){
    fs.readFile('./views/cats.html','utf8', function (errors,contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  } else if(request.url === '/images/cat.jpg'){
    fs.readFile('./images/cat.jpg',function (errors,contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  } else if(request.url === '/cars/new'){
    fs.readFile('./views/newcar.html','utf8', function (errors,contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
})
server.listen(6789);
console.log("Running in localhost at port 6789");

