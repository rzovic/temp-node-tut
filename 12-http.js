// https://www.npmjs.com/
// use well downloaded packages, could mean that working solution and bugs are dealt with

const http = require('http');

const server = http.createServer((req,res)=>{   //req is request, res is response
    if(req.url === '/'){
        res.end('Welcome to our home page')
        return
    }
    if(req.url === '/about'){
        res.end('/about')
        return
    }
    res.end(`
        <h1>Oops!</h1>
        <p> We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)
