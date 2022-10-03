const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<h2>Respuesta desdel Back-End -> Hola Mundo</h2>')
})

server.listen(3600, () => {
    console.log("El servidor esta escuchando el puerto 3600")
})