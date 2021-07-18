var history = require('connect-history-api-fallback');
const servestatic = require('serve-static')
const path = require('path')
const express = require('express')
const port = process.env.PORT || 5000;
const app = express();
app.use(history());
app.use(servestatic(path.join(path.resolve(), 'dist')));
app.listen(port, () => { console.log("API server started on " + port); });