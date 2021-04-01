// node.js dialogflow client
const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");

async function runSample(projectId = process.env.PROJECT_ID) {
   const sessionId = uuid.v4();
   const sessionClient = new dialogflow.SessionsClient();
   const sessionPath = sessionClient.projectAgentSessionsPath(projectId, sessionId);

   const request = {
      session: sessionPath,
      queryInput: {
         text: {
            text: "hello",
            languageCode: "en-US",
         },
      },
   };

   const responses = await sessionClient.detectIntent(request);
   console.log("detected intent");

   const result = responses[0].queryResult;
   console.log(`query: ${result.queryText}`);
   console.log(`response: ${result.fulfillmentText}`);

   if (result.intent) {
      console.log(`intent: ${result.intent.displayName}`);
   } else {
      console.log("no intent matched.");
   }
}

runSample();
