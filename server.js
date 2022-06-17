const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./public'));

// This route serves the React app
app.get('*', (req, res) => res.sendFile(('./public/index.html')));

app.listen(port, () => console.log(`Server up!`));