const express = require('express');
const routes = require('./routes');
const { init } = require('./controllers/inquirerController');

const app = express();

const PORT = process.env.PORT || 3001;

// middleware for req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));