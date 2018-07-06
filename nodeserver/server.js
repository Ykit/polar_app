const express = require('express');
const app = express();
const path = require('path');
const PORT = '8081';
const HOST = '127.0.0.1';

const CLIENT = path.resolve(process.cwd(), 'dist', 'index.html');
app.use(express.static(path.resolve(__dirname, 'dist')));
app.get('/', (req, res) => {
  res.sendFile(CLIENT);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${HOST} ON ${PORT}`)
})
