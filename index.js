const express = require('express');
const path = require('path');
const produtosRoutes = require('./routes/produtosRoutes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, ' public')));

app.get('/', (req, res) => {
  res.send('Bem-vindo à minha loja!');
});

app.use('/produtos', produtosRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));