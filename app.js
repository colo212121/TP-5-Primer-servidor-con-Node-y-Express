import express from 'express';
import { horaActual, horaCompleta } from './time.js';
const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.get('/hora', (req, res) => {
    res.send(horaActual());
});

app.get('/fecha-completa', (req, res) => {
    res.send(horaCompleta());
});

app.use((req, res) => {
    const errorCode = 404;
    const httpCatUrl = `https://http.cat/${errorCode}`;
    res.status(errorCode).send(`<img src="${httpCatUrl}" alt="Error 404 - Not Found">`);
});

export default app;
