const express = require('express');
const app = express();
const port = 5000;

const productRoute = require("./Routers/Product");
app.use("/Product", productRoute);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));