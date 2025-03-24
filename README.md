# Football Manager Mission Generator

This project is a **Football Manager Mission Generator** that creates random challenges for players of the Football Manager game. It generates a team, a mission, and transfer restrictions to make your Football Manager experience more exciting and unpredictable.

## Features

- Randomly selects a country, league, and team.
- Assigns a mission based on the team's strength (top, mid, low, or lower league).
- Generates a time limit to complete the mission.
- Sets transfer restrictions for the first transfer market.
- Interactive UI with a "Generate your mission!" button.

## Project Structure

```bash
. ├── data.js # Contains all the data for countries, leagues, teams, missions, etc.
├── index.html # The main HTML file for the project.
├── main.js # Contains the logic for generating missions and updating the UI.
├── resources/
│ ├── css/
│ │ ├── reset.css
│ │ ├── styles.css
│ │ ├── basic-styles.css
```

## How It Works

1. **Data Source**: The `data.js` file contains arrays of countries, leagues, teams, missions, and other related data.
2. **Logic**: The `main.js` file uses helper functions to randomly select a team, mission, and other parameters based on the data.
3. **UI Update**: The selected values are displayed dynamically in the HTML using JavaScript.
4. **Styling**: The CSS files provide a clean and responsive design for the application.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/football-manager-mission-generator.git
   ```
2. Open the index.html file in yout browser.
3. Click the "Generate your mission!" button to get a random Football Manager challenge

## Technologies used

- HTML
- CSS
- JavaScript

## License

This project is licensed under the MIT License. See the LICENSE file for details.
