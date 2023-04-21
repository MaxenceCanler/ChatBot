# Création du chatbot sur DialogFlow

## Étape 1 : Préparation
- Assurez-vous d'avoir un compte Google pour accéder à Dialogflow.
- Rédigez une liste de questions fréquemment posées (FAQ) et leurs réponses appropriées pour votre chatbot.

## Étape 2 : Création d'un agent Dialogflow
- Accédez à la console Dialogflow : https://dialogflow.cloud.google.com/
- Connectez-vous avec votre compte Google.
- Cliquez sur "Create Agent" et donnez-lui un nom, par exemple "FAQChatbot".
- Sélectionnez la langue de votre chatbot et cliquez sur "Create".

## Étape 3 : Création des intents pour les questions fréquemment posées
- Dans le menu latéral, cliquez sur "Intents".
- Cliquez sur "Create Intent" et donnez-lui un nom descriptif, par exemple "Question1".
- Dans la section "Training Phrases", ajoutez plusieurs variantes de la même question (par exemple, pour une question sur les horaires d'ouverture, ajoutez "Quels sont vos horaires ?", "À quelle heure ouvrez-vous ?" etc.).
- Dans la section "Responses", ajoutez la réponse appropriée pour cette question (par exemple, "Nous sommes ouverts du lundi au vendredi de 9h à 18h.").
- Cliquez sur "Save".
- Répétez les étapes 2 à 5 pour chaque question de votre liste de FAQ.

## Étape 4 : Test du chatbot
- Utilisez la fenêtre "Try it now" dans la console Dialogflow pour tester les différentes questions et vérifier les réponses de votre chatbot.
- Si nécessaire, ajustez les intents et les réponses pour améliorer la performance du chatbot.

# Implémenter un webhook

## Introduction
Un chatbot est un programme informatique capable de communiquer avec des utilisateurs via une interface de chat. Dans ce tutoriel, nous allons vous montrer comment implémenter un chatbot en utilisant Node.js et Vercel.

## Prérequis
Avant de commencer, vous devez avoir les éléments suivants :
- Un ordinateur avec un système d'exploitation Linux (ou un émulateur de terminal)
- Un accès à Internet

## Installation

La première étape consiste à mettre à jour votre système. Ouvrez un terminal et exécutez la commande suivante :

`sudo apt-get update -y && sudo apt-get upgrade -y
`


Cette commande mettra à jour tous les paquets système de votre système.

Ensuite, nous allons installer NVM (Node Version Manager), qui nous permettra de gérer les différentes versions de Node.js sur notre système. Exécutez la commande suivante dans votre terminal :

`sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
`

copiez collé ces 3 lignes dans votre fichier ~/.bashrc ou probablement votre ~/.zshrc: 

`export NVM_DIR="$HOME/.nvm"`
`[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
`[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"`

Cette commande télécharge et exécute un script qui installe NVM sur votre système.

Maintenant que nous avons installé NVM, nous pouvons installer la dernière version de Node.js en utilisant la commande suivante :

`sudo nvm install node
`

Pour vérifier si Node.js est correctement installé, exécutez la commande suivante :

`node -v
`

Cela devrait afficher la version de Node.js que vous avez installée.

NPM (Node Package Manager) est un gestionnaire de paquets pour Node.js. Nous allons l'installer en exécutant la commande suivante :

`sudo apt install npm -y
`


Vercel est une plateforme de déploiement de sites web qui nous permettra de déployer notre chatbot. Exécutez la commande suivante pour l'installer :

`npm install -g vercel
`


Pour vérifier si Vercel est correctement installé, exécutez la commande suivante :

`vercel -v
`

Cela devrait afficher la version de Vercel que vous avez installée.

### Conclusion
Félicitations ! Vous avez maintenant installé tous les outils nécessaires pour implémenter votre chatbot. Dans les prochaines étapes, nous allons voir comment créer et déployer un chatbot à l'aide de Node.js et Vercel.


Une fois l'installation terminée, vous pouvez utiliser la commande `vercel --login` pour vous connecter à votre compte Vercel.

## Déploiement initial
Pour déployer votre chatbot pour la première fois, suivez les étapes suivantes :
1. Créez un nouveau projet sur Vercel.
2. Sélectionnez le dossier contenant votre application.
3. Sélectionnez les options de configuration souhaitées.
4. Attendez que le déploiement soit terminé.

Une fois le déploiement terminé, vous pouvez accéder à votre chatbot en utilisant l'URL fournie par Vercel.

## Réenvoi des modifications
Lorsque vous apportez des modifications à votre application, vous devez les réenvoyer à Vercel pour mettre à jour le déploiement. Pour ce faire, suivez les étapes suivantes :
1. Ouvrez une fenêtre de terminal et accédez au dossier contenant votre application.
2. Exécutez la commande `vercel --prod`.
3. Vercel vous demandera de confirmer les options de configuration que vous avez choisies lors du déploiement initial.
4. Attendez que le déploiement soit terminé.

Une fois le déploiement terminé, les modifications seront appliquées à votre chatbot.

## Remarque
Assurez-vous de copier les fichiers `package.json`, `index.js` et `vercel.json` dans le dossier de votre application avant de déployer votre chatbot avec Vercel.

# Implémenter les fonctions dans le ChatBot Dialogflow

## Étape 1 : Implémentation des arguments dans les intents
Les arguments dans Dialogflow permettent de capturer des informations spécifiques à partir de l'entrée de l'utilisateur et de les utiliser pour personnaliser les réponses du chatbot. Voici comment ajouter des arguments à vos intents :

- Dans la section "Training Phrases" d'un intent, encadrez un mot ou une phrase avec des crochets (par exemple, "[ville]").
- Dans la section "Action and parameters" de l'intent, cliquez sur "Add Parameter" et donnez un nom à l'argument (par exemple, "ville").
- Dans la section "Prompts", ajoutez une phrase qui demandera à l'utilisateur de fournir la valeur de l'argument (par exemple, "Dans quelle ville êtes-vous ?").
- Dans la section "Responses", utilisez la variable "@ville" pour personnaliser la réponse du chatbot en fonction de la ville saisie par l'utilisateur.

## Étape 2 : Déploiement du chatbot
Une fois que vous avez créé votre chatbot et que vous êtes satisfait de son fonctionnement, vous pouvez le déployer pour qu'il soit accessible aux utilisateurs. Voici comment procéder :

- Dans la console Dialogflow, cliquez sur le bouton "Deploy".
- Donnez un nom à la version déployée (par exemple, "v1.0").
- Cliquez sur "Deploy".
- Vous pouvez maintenant utiliser l'URL fournie pour accéder à votre chatbot.

## Remarque

Assurez vous d'avoir bien cocher l'utilisation de webhook sur votre intent

## Conclusion
Félicitations ! Vous avez maintenant appris comment créer et déployer un chatbot avec Dialogflow. Avec un peu de pratique et d'expérience, vous pourrez améliorer la performance de votre chatbot en l'ajustant en fonction des retours des utilisateurs et de l'analyse des données.

# Comment intégrer un Chatbot Dialogflow sur une page HTML

## Prérequis
Avant de commencer, vous devez avoir les éléments suivants :
- Un compte Dialogflow avec un chatbot créé et déployé
- Une page HTML pour intégrer votre chatbot

## Étape 1 : Obtenir le code d'intégration
- Dans la console Dialogflow, accédez à l'onglet "Integrations".
- Activez l'intégration "Web Demo".
- Dans la section "Integration Settings", personnalisez les paramètres de l'intégration en fonction de vos besoins.
- Copiez le code fourni dans la section "Web Demo Integration Code".

## Étape 2 : Intégration sur une page HTML
- Dans votre page HTML, ajoutez une div pour afficher le chatbot
- Collez le code fourni par Dialogflow dans la div pour afficher le chatbot
- Vous pouvez utiliser les 2 pages html fournies dans le dossier "html" de ce repository pour tester votre chatbot

