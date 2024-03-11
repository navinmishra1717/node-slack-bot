require("dotenv").config();
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.OAUTH_TOKEN, // Oauth & Permissions tab -> OAuth Tokens for Your Workspace ->  Bot User OAuth Token
  signingSecret: process.env.SIGNING_SECRET, // Basic Information Tab -> App credentials -> Signing Secret
  socketMode: true,
  appToken: process.env.APP_LEVEL_TOKEN, // Basic Information Tab -> App-Level Tokens that we created
});

app.command("/sqaure", async ({ command, ack, say }) => {
  try {
    // Acknowledge command request
    await ack();
    let txt = command.text;
    // Say result
    if (isNaN(txt)) {
      say(`${txt} is not a number`);
    } else {
      say(txt + " squared = " + parseFloat(txt) * parseFloat(txt));
    }
  } catch (error) {
    console.error("err: ", error);
  }
});

app.message("hello", async ({ command, say }) => {
  // Replace hello with the message
  try {
    say("Hi! Thanks for DM'ing me!");
  } catch (error) {
    console.error("err: ", error);
  }
});

// app.event("file_shared", async ({ event, client }) => {
//   try {
//     const channelId = event.channel_id;
//     const fileId = event.file_id || event.file.id;
//     const fileInfo = await client.files.info({ file: fileId });
//     const fileUrl = fileInfo.file.permalink_public;
//     const msg = `<${fileUrl}|${fileInfo.file.name}>`;
//     await client.chat.postMessage({ channel: channelId, text: msg });
//   } catch (error) {
//     console.error("err: ", error);
//   }
// });

app.start(3000);
