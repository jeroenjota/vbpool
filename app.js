const express = require('express');
const app = express();
const pools = require('/home/jeroen/devellocal/vbpool/public/data/teams.json')
const finweds = require('/home/jeroen/devellocal/vbpool/public/data/finales.json')

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.render('index', {
    title: "Laurierboom Voetbalpool",
    pools: pools,
    finales: finweds
  });
})

const server = app.listen(7000, () => {
  console.log('App running → PORT ${server.address().port}');
});
