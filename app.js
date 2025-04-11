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

export default app;