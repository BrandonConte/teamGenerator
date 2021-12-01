const Team = require('./lib/Team');

const generatePage = require('./src/page-temp');
const writeFile = require('./utils/generate-site');

const testTeam = new Team();

testTeam.initializeManager()
