const http = require('http')
const fs = require('fs')
const path = require('path')
const port = 3030
http.createServer((req, res)=>{
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(fs.readFileSync('./index.html'))
    }else if(url.startsWith('/pages')){
        const file = url.split('/')[2]
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(fs.readFileSync(path.join(__dirname, 'pages', file)))
    }else if(url.startsWith('/src/images')){
        const file = url.split('/')[3]
        res.writeHead(200, {'Content-Type':'image/png'})
        res.end(fs.readFileSync(path.join(__dirname, 'src', 'images', file)))
    }
}).listen(port)