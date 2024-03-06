const { Console } = require("node:console");
const http = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;
const PersonajesStarWars = require('./buscador/personajesStarWars.js');
//const { parse } = require("node:path");
const { resourceLimits } = require("node:worker_threads");
const url = require('url');


const processRequest = (req, resp) => {
  
  let headers = req.headers;
  let method = req.method;
  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;
  const query = parseUrl.query;
  resp.statusCode = 200;
  resp.setHeader = ("Content-Type", "application/json");

  switch (pathname) {
    case '/showAll':
      result = personajes;
      resp.statusCode = 200;
      break;
    case '/searchCharacter':
      result = personajesStarWars.findPersonaje(query.search);
      break;
    default:
      result = { message: 'invalid request' };
      resp.statusCode = 404;
      break;
  };
  //resp.setHeader('Content-Type', 'application/json; charset=utf-8');
  resp.end(JSON.stringify(result));

};



let personajes = [
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
    "movies": [
      "A New Hope (1977)",
      "The mandolorian - Serie(2020) "
    ]

  }
]

let personajesStarWars = new PersonajesStarWars(personajes);


const server = http.createServer(processRequest);

server.listen(port, hostname, () => {
  console.log(`Start server at: ${hostname} : ${port}`)

});
