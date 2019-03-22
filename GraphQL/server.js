import express from 'express'
import schema from './schema';

import { graphql } from 'graphql';
import bodyParser from 'body-parser';

let app = express();
let PORT = 3000;

app.use(bodyParser.text({ type: 'application/graphql' }))
app.post('/graphql', (req, res) => {
  //GraphQL executor
  console.log('req.body',req.body)
  graphql(schema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  })
});

let server = app.listen(PORT,function(){

	let host = server.address().address;
	let port = server.address().port;

	console.log('Graphql listening at http://%s:%s',host,port);
})


