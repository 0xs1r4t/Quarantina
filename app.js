// the dialogflow server lies here

const dialogflow = require('dialogflow');
const uuid = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;

// A unique identifier for the given session
const sessionId = uuid.v4();

app.use(bodyParser.urlencoded({
    extended: false
}));

// cors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });

app.post('/send-msg',(req, res)=>{
    runSample(req.body.MSG).then(data=>{
      res.send({Reply:data})
    })
})


/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(msg, projectId = 'quarantina-nqrpht') {
  // Create a new session
  const sessionClient = new dialogflow.SessionsClient({
      keyFilename: '/home/wtf_minseok/Desktop/Quarantina/qt.json'
});
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: msg,
        // The language used by the client (en-US)
        languageCode: 'en-GB',
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
  return result.fulfillmentText;
}

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("ui"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "ui/js/index.js");
  });

// listen for requests :)
const listener = app.listen(port, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});
