const express = require('express');
const app = express();
const pools = require('./public/data/teams.json')
const wedstrijden = require('./public/data/wedstrijden.json')
const moment = require('moment')

moment.locale('nl');
moment.updateLocale('nl', {
    weekdaysShort: ["zo", "ma", "di", "wo", "do", "vr", "za", "zo"]
});
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.render('index', {
    title: "Laurierboom Voetbalpool",
    pools: pools,
    weds: wedstrijden,
    moment: moment
  });
})

const server = app.listen(7000, () => {
  console.log('App running → PORT ${server.address().port}');
});
