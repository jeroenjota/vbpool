const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const pools = require('./public/data/teams.json')
const data = require('./public/data/data.json')
const moment = require('moment')

moment.locale('nl');
moment.updateLocale('nl', {
    weekdaysShort: ["zo", "ma", "di", "wo", "do", "vr", "za", "zo"]
});
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded( { extended: true }))

function allTeams(){
  // maak een lijstje van alle teamnamen
  // zou eigenlijk nog een pool letter bij moeten 
  var team
  var teams = []
  for (var i = 0; i < pools.poules.length; i++){
    for (var j=0; j<4; j++){
      team = pools.poules[i].teams[j].team
      teams.push(team)
    }
  }
  return teams
}

app.get('/', (req, res) => {
  teams = allTeams()
  teams.sort()
  res.render('index', {
    title: "Laurierboom Voetbalpool",
    pools: pools,
    weds: data,
    moment: moment,
    teams: teams
  });
})

app.post('/submit', (req, res) => {
  const data = req.body

  console.log(JSON.stringify(data))
  res.redirect('/')
})

const server = app.listen(7000, () => {
  console.log('App running → PORT ${server.address().port}');
});
