const express = require("express");
const bodyParser = require("body-parser");
const { WebhookClient } = require("dialogflow-fulfillment");

const app = express().use(bodyParser.json());

app.post("/webhook", (request, response) => {
  const agent = new WebhookClient({ request, response });

  function welcome(agent) {
    agent.add("Bonjour ! Comment puis-je vous aider ?");
  }

  //Fonction a décommenté pour l'ajouter au ChatBot
  // function tellTime(agent) {
  //   const now = new Date();
  //   const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  //   agent.add(`Il est actuellement ${currentTime}.`);
  // }

  //Fonction a décommenté pour l'ajouter au ChatBot
  // function calculateAge(agent) {
  //   const birthYear = agent.parameters.birthYear;
  //   const currentYear = new Date().getFullYear();
  //   const age = currentYear - birthYear;
  //   agent.add(`Si vous êtes né(e) en ${birthYear}, vous avez ${age} ans.`);
  // }

  const intentMap = new Map();
  intentMap.set("Default Welcome Intent", welcome);
  // intentMap.set("Tell Time", tellTime); // Décomenter cette ligne si la fonction tellTime est décommentée
  // intentMap.set("Calculate Age", calculateAge); // Décomenter cette ligne si la fonction calculateAge est décommentée
  agent.handleRequest(intentMap);
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is listening on port 8080");
});
