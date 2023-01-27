const express = require('express');

const routerUsers = require('./src/users/routes');

const app = express();
const port = 3000;

app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api/v1/users', routerUsers);

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
