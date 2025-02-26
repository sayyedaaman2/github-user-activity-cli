# GitHub User Activity CLI

A simple command-line tool to fetch and display a GitHub user's recent public activity.

## Features
- Fetches the latest public events for any GitHub user.
- Displays push events, issue creations, and starred repositories.
- Uses the GitHub API to retrieve up to 100 recent events.
- Works without authentication but respects API rate limits.

## Installation
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/github-activity-cli.git
   cd github-activity-cli
   ```
2. Install dependencies (if needed):
   ```sh
   npm install
   ```

## Usage
Run the script using:
```sh
node index.js
```
Then enter a GitHub username when prompted.

### Example Output
```
Enter the GitHub username: sayyedaaman2
Pushed 3 commits to sayyedaaman2/task-tracker-cli
Opened a new issue in kamranahmedse/developer-roadmap
Starred kamranahmedse/developer-roadmap
Performed ForkEvent on some-repo
```

## API Rate Limits
- GitHub imposes rate limits on unauthenticated API requests.
- If you hit the rate limit, try again later or use a different network.

## License
This project is licensed under the MIT License.

## Contributing
Feel free to submit issues and pull requests to improve this CLI tool!
