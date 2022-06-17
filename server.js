const express = require("express");
// eslint-disable-next-line no-unused-vars
// const bodyParser = require('body-parser');
const publicPath = path.join(__dirname, '..', 'public')
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// This route serves the React app
app.get('*', (req, res) => res.sendFile(path.resolve(publicPath, "index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}`));