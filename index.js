const { Console } = require("node:console");
const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;


const onCreateServer = (req, resp) =>{
    let url = req.url;
    let headers = req.headers;
    let method = req.method;

    resp.statusCode = 200;
    resp.setHeader = ("Content-Type", "text/plain");

    const personajes = [
        {
          "name": "Obi-Wan Kenobi",
          "description": "Jedi Master, who teach everything he knows to Anakin",
          "age": 68,
          "movies": [
            "A New Hope (1977)"
          ]
        },
        {
          "name": "Darth Vader",
          "description": "Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever, and was believed by some to be the prophesied Chosen One who would bring balance to the Force.",
          "age": 10,
          "movies": [
            "A New Hope (1977)",
            "The Empire Strikes Back (1980)"
          ]
        },
    
        {
        "name": "Boba Fet",
        "description": "The most famous bounty hunter on the Galaxy",
        "age": 30,
        "movies":[
            "A New Hope (1977)",
            "The mandolorian - Serie(2020) "
        ]
    
        }
    ]
    

    if(url === "/getAll" && req.method === "GET"){
        
        resp.end(JSON.stringify(personajes));       
          
    }else{
        resp.statusCode = 404;
        resp.end("Page not found");
    }
    console.log("I received a request");

};
const server = http.createServer(onCreateServer);

server.listen(port, hostname, () =>{
    console.log(`Start server at: ${hostname} : ${port}`)

});
