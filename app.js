const express = require('express');
const helmet = require('helmet');
let compression = require('compression');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();


const app = express();

app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(compression());
app.use(express.static('./public'));

app.listen(process.env.HTTP_PORT, () => {
    console.log(`Server listeting on ${process.env.HTTP_PORT}`);
})

app.get('/api/get-uuid', (req, res) => {
    const uuid = uuidv4();
    res.send(uuid);
});

app.get('*', (req, res) => {
    res.status(404).send('Not found');
});
