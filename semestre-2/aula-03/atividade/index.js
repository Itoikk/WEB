const express = require('express');
const app = express();
const axios = require('axios');
const lodash = require('lodash')


// Exemplo 1 

async function buscar() {
    try{
        const dados = await axios.get("https://api.tvmaze.com/search/shows?q=Wednesday");
        const dd = dados.data.find(serie => serie.show.name === "Wednesday");
        return dd;
    } catch(erro) {
        console.log(erro);
    }

}
app.get('/filtrar', async (req, res) => {
    const ss = await buscar();
    const jaison = {
        titulo: ss.show.name,
        generos: ss.show.genres,
        resumo: lodash.trim(lodash.replace(ss.show.summary, /<[^>]*>/g, '')),
        url: ss.show.officialSite
    };
    res.json(jaison);
    //res.json(ss);
});
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
