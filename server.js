const express = require("express");
// eslint-disable-next-line no-unused-vars
// const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// This route serves the React app
app.get('*', (req, res) => res.sendFile(path.join(publicPath, "index.html")));

app.listen(port, () => console.log(`Server up!`));