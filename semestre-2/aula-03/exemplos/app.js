/*
const express = require('express');
const app = express();
app.use(express.json());
app.post('/dados', (req, res) => {
    console.log('req.body:', req.body);
    res.send('Recebi os dados, veja o console'); // Vai ser undefined!
});
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
*/

const express = require('express'); 
const app = express(); 
// Exemplo 1 
app.get('/', (req, res) => { 
res.send('Olá, mundo!'); 
}); 
// Exemplo 2: rota /sobre (JSON) 
app.get('/sobre', (req, res) => { 
res.json({ projeto: 'Aula  02', disciplina: 'WEB' }); 
}); 
// Servidor ouvindo na porta 3000 
app.listen(3000, () => { 
console.log('Servidor rodando em http://localhost:3000'); 
});
