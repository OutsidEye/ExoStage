# ExoStage

Cette application permet de gérer une liste de conférences, il est possible d'en ajouter et des les modifier. La barre de recherche permet de les filtrer.

Technologies utilisées : 

- MongoDB (base de données)
- Express (framework Node)
- AngularJS (framework front)
- NodeJS (environnement back)
- Bootstrap (framework css)

Dépendances Node installées :

- body-parser 
- express
- mocha
- mongoose


Pour installer et lancer l'application, git clone l'url de l'application sur sa page GitHub (https://github.com/OutsidEye/ExoStage.git), installer node à l'aide d'un "sudo apt-get install nodejs npm" lancer "npm install" une fois dans le dossier du projet, puis "npm install express", "npm install body-parser", "npm install mongoose". 

Angular et Bootstrap sont en cdn il n'y a donc pas besoin de les télécharger. 

Pour installer MongoDB, lancer un 

"sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927" 
puis 
"echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list" 
suivi d'un
"sudo apt-get update" 
et enfin
"sudo apt-get install -y mongodb-org". 

Voilà il vous suffit maintenant de lancer un "npm start" et l'application est maintenant fonctionnelle !

