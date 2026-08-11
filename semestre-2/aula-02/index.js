const axios = require('axios');
const lodash = require('lodash');


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual filme você quer? ",function(a){
    axios.get(`https://api.tvmaze.com/search/shows?q=${a}`)
    .then(response => {
            const serie = response.data.find(item => item.show.name === a);
            console.log("Título:", serie.show.name);
            console.log("Gêneros:", lodash.join(serie.show.genres, ', '));
            console.log("Resumo", lodash.trim(lodash.replace(serie.show.summary, /<[^>]*>/g, '')));
            console.log("URL:", serie.show.officialSite || "Sem site!");

        })
        .catch(error => {
            console.error('Erro:', error);
        });
    rl.close();
});