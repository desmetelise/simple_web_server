const express = require('express');
const app = express();
const PORT = 3000;

//Basic routes
app.get('/', (request, response) => {
    response.send('Hello World');
});

app.get('/about', (request, response) => {
    response.send('This app was made by VIVES peoples');
});

//Express error handling middleware
app.use((request, response) => {
    response.type('text/plain');
    response.status(505);
    response.send('Error page');
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))//backticks zorgen dat je placeholders kunt gebruiken