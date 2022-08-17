const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'front-end/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end/about.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end/services.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end/portfolio.html'));
});

app.get('/portfolio-example', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end/portfolio-example.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end/blog.html'));
});

app.get('/blog-example', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end/blog-example.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'front-end/contact.html'));
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
