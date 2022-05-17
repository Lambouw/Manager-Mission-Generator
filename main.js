/* Arrays */
const countries = ['England', 'France', 'Germany', 'Italy', 'Spain'];
const leaguesEng = ['Premier League', 'EFL Championship', 'EFL League One', 'EFL League Two'];
const leaguesFra = ['Ligue 1 Uber Eats', 'Ligue 2 BKT'];
const leaguesGer = ['Bundesliga', '2. Bundesliga', '3. Liga'];
const leaguesIta = ['Serie A TIM'];
const leaguesSpa = ['La Liga Santander', 'La Liga Smartbank'];
const teamsEng1 = ['Arsenal', 'Aston Villa', 'Brentford', 'Brighton', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Leeds United', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle United', 'Norwich', 'Southampton', 'Spurs', 'Watford', 'West Ham', 'Wolves'];
const teamsEng2 = ['AFC Bournemouth', 'Barnsley', 'Birmingham City', 'Blackburn Rovers', 'Blackpool', 'Bristol City', 'Cardiff City', 'Coventry City', 'Derby County', 'Fulham', 'Huddersfield', 'Hull City', 'Luton Town', 'Middlesbrough', 'Millwall', 'Nottingham Forrest', 'Peterborough', 'Preston', 'Queens Park Rangers', 'Reading', 'Sheffield United', 'Stoke City', 'Swansea City', 'West Brom'];
const teamsEng3 = ['Accrington', 'AFC Wimbledon', 'Bolton', 'Burton Albion', 'Cambridge Utd', 'Charlton Athletic', 'Cheltenham Town', 'Crewe Alexandra', 'Doncaster', 'Fleetwood Town', 'Gillingham', 'Ipswich', 'Lincoln City', 'MK Dons', 'Morecambe', 'Oxford United', 'Plymouth Argyle', 'Portsmouth', 'Rotherham Utd', 'Sheffield Wed', 'Shrewsbury', 'Sunderland', 'Wigan Athletic', 'Wycombe'];
const teamsEng4 = ['Barrow', 'Bradford City', 'Bristol Rovers', 'Carlisle United', 'Colchester', 'Crawley Town', 'Exeter City', 'Forest Green', 'Harrogate Town', 'Hartlepool', 'Leyton Orient', 'Mansfield Town', 'Newport County', 'Northampton', 'Oldham Athletic', 'Port Vale', 'Rochdale', 'Salford City', 'Scunthorpe United', 'Stevenage', 'Sutton United', 'Swindon Town', 'Tranmere Rovers', 'Walsall'];
const teamsFra1 = ['SCO Angers', 'AS Monaco', 'AS St. Etienne', 'Bordeaux', 'Clermont Foot 63', 'ESTAC Troyes', 'FC Lorient', 'FC Metz', 'FC Nantes', 'LOSC Lille', 'Montpellier', 'OGC Nizza', 'Olympique Lyon', 'Olympique Marseille', 'Paris Saint Germain', 'RC Lens', 'Stade Brest', 'Stade Reims', 'Stade Rennes', 'Strasbourg'];
const teamsFra2 = ['AC Ajaccio', 'Auxerre', 'SC Amiens', 'AS Nancy Lorraine', 'FCO Dijon', 'En Avant Guingamp', 'FC Sochaux', 'Grenoble Foot 38', 'AC Le Havre', 'Niort', 'Olympique Nîmes', 'Paris FC', 'Pau FC', 'Quevilly Rouen', 'Rodez AF', 'SC Bastia', 'SM Caen', 'Toulouse FC', 'USL Dunkerque', 'Valenciennes FC'];
const teamsGer1 = ['1. FC Köln', '1. FSV Mainz 05', 'DSC Arminia Bielefeld', 'Borussia Dortmund', 'FC Augsburg', 'FC Bayern München', 'Eintracht Frankfurt', 'Greuther Fürth', 'Hertha BSC Berlin', 'Bayer Leverkusen', 'Borussia Mönchengladbach', 'RB Leipzig', 'SC Freiburg', 'TSG Hoffenheim', 'Union Berlin', 'VfB Stuttgart', 'VfL Bochum', 'VfL Wolfsburg'];
const teamsGer2 = ['1. FC Nürnberg', 'Fortuna Düsseldorf', 'Dynamo Dresden', 'FC Erzgebirge Aue', 'FC Ingolstadt 04', 'FC Schalke 04', 'FC St. Pauli', 'Hamburger SV', 'Hannover 96', 'Heidenheim', 'Holstein Kiel', 'Karlsruher SC', 'Regensburg', 'Hansa Rostock', 'SC Paderborn 07', 'SV Darmstadt 98', 'SV Sandhausen', 'SV Werder Bremen'];
const teamsGer3 = ['1. FC Magdeburg', '1860 München', 'Borussia Dortmund II', 'Braunschweig', 'FSV Zwickau', 'Hallescher FC', 'Kaiserslautern', 'MSV Duisburg', 'Saarbrücken', 'SC Freiburg II', 'SC Verl', 'SV Meppen', 'SV Waldhof Mannheim', 'SV Wehen Wiesbaden', 'TSV Havelse', 'Türkgücü München', 'VfL Osnabrück', 'Viktoria Berlin', 'Viktoria Köln', 'Würzburger Kickers'];
const teamsIta1 = ['Atalanta Bergamo', 'Bologna', 'Cagliari Calcio', 'Empoli', 'AC Fiorentina', 'Genoa', 'Hellas Verona', 'Inter Milan', 'Lazio Roma', 'AC Milan', 'Napoli', 'Juventus Torino', 'AS Roma', 'Salernitana', 'Sampdoria Genoa', 'Sassuolo', 'Spezia Calcio', 'FC Torino', 'Udinese', 'FC Venezia'];
const teamsSpa1 = ['Athletic Club', 'Atlético de Madrid', 'CA Osasuna', 'Cádiz CF', 'Deportivo Alavés', 'Elche CF', 'FC Barcelona', 'Getafe CF', 'Granada CF', 'Levante UD', 'Rayo Vallecano', 'RC Celta Vigo', 'RCD Espanyol Barcelona', 'RCD Mallorca', 'Real Betis', 'Real Madrid', 'Real Sociedad', 'Sevilla FC', 'Valencia CF', 'Villarreal CF'];
const teamsSpa2 = ['AD Alcorcón', 'Burgos CF', 'CD Leganés', 'CD Lugo', 'CD Mirandés', 'CD Tenerife', 'CF Fuenlabrada', 'FC Cartagena', 'Girona FC', 'Málaga CF', 'Real Oviedo', 'Real Sporting', 'Real Valladolid CF', 'Real Zaragoza', 'Real Sociedad B', 'SD Amorebieta', 'SD Eibar', 'SD Huesca', 'SD Ponferradina', 'UD Almería', 'UD Ibiza', 'UD Las Palmas'];

const topTeams = ['Arsenal', 'Chelsea', 'Liverpool', 'Manchester City', 'Manchester United', 'Spurs', 'AS Monaco', 'Olympique Lyon', 'Olympique Marseille', 'Paris Saint Germain', 'Borussia Dortmund', 'Bayern München', 'RB Leipzig', 'Bayer Leverkusen', 'Inter Milan', 'AC Milan', 'Napoli', 'Juventus Torino', 'Atlético de Madrid', 'FC Barcelona', 'Real Madrid', 'Sevilla FC'];
const midTeams = ['Everton', 'Leicester City', 'West Ham', 'Wolves', 'Aston Villa', 'AS St. Etienne', 'Bordeaux', 'LOSC Lille', 'OGC Nizza', 'Stade Rennes', 'Eintracht Frankfurt', 'Borussia Mönchengladbach', 'TSG Hoffenheim', 'VfL Wolfsburg', 'Atalanta Bergamo', 'AC Fiorentina', 'Lazio Roma', 'AS Roma', 'Athletic Club', 'Real Betis', 'Real Sociedad', 'Valencia CF', 'Villarreal CF'];
const lowTeams = ['Brentford', 'Brighton', 'Burnley', 'Crystal Palace', 'Leeds United', 'Newcastle United', 'Norwich', 'Southampton', 'Watford', 'SCO Angers', 'Clermont Foot 63', 'ESTAC Troyes', 'FC Lorient', 'FC Metz', 'FC Nantes', 'Montpellier', 'RC Lens', 'Stade Brest', 'Stade Reims', 'Strasbourg', '1. FC Köln', '1. FSV Mainz 05', 'DSC Arminia Bielefeld', 'FC Augsburg', 'Greuther Fürth', 'Hertha BSC Berlin', 'SC Freiburg', 'Union Berlin', 'VfB Stuttgart', 'VfL Bochum', 'Bologna', 'Cagliari Calcio', 'Empoli', 'Genoa', 'Hellas Verona', 'Salernitana', 'Sampdoria Genoa', 'Sassuolo', 'Spezia Calcio', 'FC Torino', 'Udinese', 'FC Venezia', 'CA Osasuna', 'Cádiz CF', 'Deportivo Alavés', 'Elche CF', 'Getafe CF', 'Granada CF', 'Levante UD', 'Rayo Vallecano', 'RC Celta Vigo', 'RCD Espanyol Barcelona', 'RCD Mallorca'];

const missionTop = ['win all titles', 'become League Champion', 'win the National League and the National Cup'];
const missionMid = ['win all titles', 'become League Champion', 'win the National League and the National Cup', 'qualify for the Champions League', 'qualify for the Europa League', 'qualify for the Conference League'];
const missionLow = ['win all titles', 'become League Champion', 'win the National League and the National Cup', 'qualify for the Champions League', 'qualify for the Europa League', 'qualify for the Conference League', 'don\'t get relegated'];
const missionLowerLeague = ['get promoted'];
const time = [1, 2, 3, 4, 5];
const amountTransfers = [0, 1, 2, 3, 4, 5, 'as many as you want'];

/* Generate random number between 0 & num-1 */
const randomNumber = num => {
    return Math.floor(Math.random() * num);
}

/* Pick entry of array */
const pickEntry = arr => {
    return arr[randomNumber(arr.length-1)];
}

let country = pickEntry(countries);
let league;
let team;
let mission;

switch (country) {
    case 'England':
        league = pickEntry(leaguesEng);
        break;
    case 'France':
        league = pickEntry(leaguesFra);
        break;
    case 'Germany':
        league = pickEntry(leaguesGer);
        break;
    case 'Italy':
        league = pickEntry(leaguesIta);
        break;
    case 'Spain':
        league = pickEntry(leaguesSpa);
        break;
}

switch (league) {
    case 'Premier League':
        team = pickEntry(teamsEng1);
        break;
    case 'EFL Championship':
        team = pickEntry(teamsEng2);
        break;
    case 'EFL League One':
        team = pickEntry(teamsEng3);
        break;
    case 'EFL League Two':
        team = pickEntry(teamsEng4);
        break;
    case 'Ligue 1 Uber Eats':
        team = pickEntry(teamsFra1);
        break;
    case 'Ligue 2 BKT':
        team = pickEntry(teamsFra2);
        break;
    case 'Bundesliga':
        team = pickEntry(teamsGer1);
        break;
    case '2. Bundesliga':
        team = pickEntry(teamsGer2);
        break;
    case '3. Liga':
        team = pickEntry(teamsGer3);
        break;
    case 'Serie A TIM':
        team = pickEntry(teamsIta1);
        break;
    case 'La Liga Santander':
        team = pickEntry(teamsSpa1);
        break;
    case 'La Liga Smartbank':
        team = pickEntry(teamsSpa2);
        break;        
}

if (topTeams.includes(team)) {
    mission = pickEntry(missionTop);
} else if (midTeams.includes(team)) {
    mission = pickEntry(missionMid);    
} else if (lowTeams.includes(team)) {
    mission = pickEntry(missionLow);
} else {
    mission = pickEntry(missionLowerLeague);
}

let years = pickEntry(time);
let transfers = pickEntry(amountTransfers);

console.log(`You manage ${team}!`);
console.log(`Your mission is to ${mission} in ${years} years.`);
console.log(`You're allowed to sign ${transfers} players on the first transfer market.`);