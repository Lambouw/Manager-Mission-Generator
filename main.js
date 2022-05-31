const generateAll = () => {
    /* Helper functions */    
    /* Generate random number between 0 & num-1 */
    const randomNumber = num => {
        return Math.floor(Math.random() * num);
    }

    /* Pick entry of array */
    const pickEntry = arr => {
        return arr[randomNumber(arr.length-1)];
    }

    /* Variable decl. & init. */
    let country = pickEntry(countries);
    let league;
    let team;
    let mission;
    let years = pickEntry(time);
    let transfers = pickEntry(amountTransfers);

    /* Generating league */
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

    /* Generating team */
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

    /* Generating mission */
    if (topTeams.includes(team)) {
        mission = pickEntry(missionTop);
    } else if (midTeams.includes(team)) {
        mission = pickEntry(missionMid);    
    } else if (lowTeams.includes(team)) {
        mission = pickEntry(missionLow);
    } else {
        mission = pickEntry(missionLowerLeague);
    }

    /* Changing HTML DOM */
    let changeVisibility = document.getElementsByClassName('hidden');
    for (let i=0; i<changeVisibility.length; i++) {
        changeVisibility[i].style.visibility = 'visible';
    }

    let teamWindow = document.getElementById('team');
    teamWindow.innerHTML = team;

    let transfersWindow = document.getElementById('transfers');
    transfersWindow.innerHTML = transfers;

    let missionWindow = document.getElementById('mission');
    missionWindow.innerHTML = mission + ' in ' + years + ' years';

    let newBtn = document.getElementById('btn1');
    newBtn.innerHTML = 'Generate again!';

    /* Console logging (commented out, because it was just needed while testing the algorithm) */
    /*    console.log(`You manage ${team}!`);
    console.log(`Your mission is to ${mission} in ${years} years.`);
    console.log(`You're allowed to sign ${transfers} players on the first transfer market.`);
    */
};

/* Function call */
let btn1 = document.getElementById('btn1');
btn1.onclick = generateAll;