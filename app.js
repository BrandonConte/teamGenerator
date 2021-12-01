const Team = require('./lib/Team');

new Team().intializeManager().then(Team.intializeTeam());
