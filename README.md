# GitHub User Activity CLI

A simple command-line tool to fetch and display a GitHub user's recent public activity.
[roadmap](https://roadmap.sh/projects/github-user-activity)

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
```

## API Rate Limits
- GitHub imposes rate limits on unauthenticated API requests.
- To avoid hitting the limit, use authentication by setting a **GitHub token** in an environment variable:
  ```sh
  export GITHUB_TOKEN=your_personal_access_token
  ```
  Then modify the script to include:
  ```js
  const headers = {
      "Authorization": `token ${process.env.GITHUB_TOKEN}`,
      "User-Agent": "github-user-activity-cli"
  };
  ```

## License
This project is licensed under the MIT License.

## Contributing
Feel free to submit issues and pull requests to improve this CLI tool!