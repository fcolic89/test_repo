const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    console.log('stigao GET zahtev');
    res.status(200).send({ message: 'Stigao zahtev!' });
});

const PORT = 80;
app.listen(PORT, () => { console.log(`Listing on port 80`) });


