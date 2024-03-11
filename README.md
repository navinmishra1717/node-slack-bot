# App for implementing slack bots in workspace

## Prerequisites

```
Nodejs
```

## Project setup

```
npm install
```

Next, we need to actually register our app with Slack. To do this, visit https://api.slack.com/apps/

And create an App from scratch.
Name your app(`eg: myApp`) and pick the workspace you want to test it in.

From there, there are a number of settings that we are going to edit.

### Steps

- First, in Basic information, go to App-Level Tokens and generate a new Token. Give this token the scopes `connections: write` and `authorizations: read`.

- Next, go to Socket Mode and enable Socket Mode. This will allow us to connect to the Slack API with WebSockets

- Next, go to App Home and find `Messages Tab` and tick the checkbox `Allow users to send Slash commands and messages from the messages tab` which allows to type and send messages and commands in the bot chatbox.

- Next, go to OAuth & Permissions, and find the Scopes section. Add the following Bot Token Scopes: `app_mention:read`, `chat:write`, `commands`, `im:history`, `im:read`, `im:write`.

- After that, rename the `.env.example` file to `.env` and replace the environment variables with your own credentials.

- To add a Slash command, go to the Slash Commands tab in the Slack API dashboard and press `Create New Command` and write `/sqaure` in the `Command` field. You can add other commands or events for different types of features.

- Go to OAuth & Permissions Tab and reinstall the app.

- Go to your workspace in the slack and then go to `Apps -> myApp(app we created)`, type `/sqaure 5`, and you will get the result.
