const http = require('http')

const server = http.createServer((request,response)=>{
 
    if(request.url === '/perro'){
        response.write('estoy en perro')
        response.end()
    }
    if(request.url === '/gato'){
        response.write('estoy en gato')
        response.end()
    }
   
})

server.listen(3000)