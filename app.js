const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
  <h1>Autoscaling Placeholder</h1>
  <h2>Hello World!</h2>
  <p>Version: 1.0.0</p>
  `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})