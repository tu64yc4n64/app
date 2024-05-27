const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter({
  "/api/*": "/$1"
});

server.use(middlewares);
server.use(rewriter);
server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
