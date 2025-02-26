const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

async function fetchActivity(username) {
    if (!username || username.trim() === "") {
        console.error("Provide a valid username!");
        readCommand();
        return;
    }

    const API = `https://api.github.com/users/${username}/events/public?per_page=100`; // Fetch public events
    const headers = {
        "User-Agent": "github-user-activity-cli"
    };

    try {
        const response = await fetch(API, { headers });

        if (!response.ok) {
            console.error(`Error: ${response.status} - ${response.statusText}`);
            return;
        }

        const data = await response.json();
        if (!data.length) {
            console.log("No recent activity found.");
            return;
        }

        // Process Events
        data.forEach(event => {
            const repoName = event.repo.name;

            if (event.type === "PushEvent") {
                const commitCount = event.payload.commits?.length || 0;
                console.log(`Pushed ${commitCount} commits to ${repoName}`);
            } else if (event.type === "IssuesEvent") {
                console.log(`Opened a new issue in ${repoName}`);
            } else if (event.type === "WatchEvent") {
                console.log(`Starred ${repoName}`);
            } else {
                console.log(`Performed ${event.type} on ${repoName}`);
            }
        });

    } catch (error) {
        console.error("Failed to fetch data:", error.message);
    } finally {
        readCommand();
    }
}

function readCommand() {
    rl.question("Enter the GitHub username: ", (username) => {
        fetchActivity(username);
    });
}

readCommand();
