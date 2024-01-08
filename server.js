const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

// middleware for req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.get('/api/tracker', async (req, res) => {
    return listAll();
})


app.listen(PORT, () => console.log(`Server running at port ${PORT}`));