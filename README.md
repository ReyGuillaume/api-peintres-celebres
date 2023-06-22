
## Prérequis 

avoir installé sur la machine locale :
* [Node.js](https://nodejs.org/)
* [NPM](https://npmjs.org/) ou tout autre gestionnaire de paquets Node.js


## Démarrer le serveur 

1. Cloner le dépôt
2. Installer les dépendances dans le dossier api-peintres-celebres avec la commande `npm install`
3. Puis démarrer le serveur avec la commande `npm start` 

```bash
git clone https://github.com/ReyGuillaume/api-peintres-celebres.git
cd api-peintres-celebres
npm install
npm start
```

Le serveur démarre par défaut sur le port 3000 (http://localhost:3000).

## End-points

### Authentification

Pour obtenir votre token de connexion, faire une requête `POST` à :

* `/api/login`

avec comme corps de requête :

```json
{
  "username": "your_login",
  "password": "your_password"
}
```

Exemple de réponse si l'authentification est un succès :

```json
{
	"message": "L'utilisateur a été connécté avec succès.",
	"data": {
		"id": 1,
		"username": "your_login",
		"password": "$2b$10$Gca0zfhPIfTSIwM4k6avCuWj07ynPeaQTPqgT0n3fzx8UILCMETwa",
		"createdAt": "2023-06-04T17:05:27.000Z",
		"updatedAt": "2023-06-04T17:05:27.000Z"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1ZXJJZCI6MSwiaWF0IjoxNjg1ODk5OTE4LCJleHAiOjE2ODU5ODYzMTh9.mhjQYe1BpZcVZXYmyPilVVP4NQIvXhTYk64vAcCh8eE"
}
```

### Utiliser son token d'authentification

Pour tout autre requête à l'api, vous devrez inclure votre jeton dans l'entête de la requête :

```json
{
  "authorization": "[VOTRE_TOKEN]"
}
```

### Manipulation des données

Faire une requête `GET` à :

* `/api/artists` pour obtenir la liste complète des artistes de la base de donnée.

Exemple de réponse si l'authentification est un succès :

```json
{
	"message": "La liste des artistes a bien été récupérée.",
	"data": [
		{
			"id": 1,
			"name": "Da Vinci2",
			"url": "coucou.jpg",
			"created": "2023-06-20T08:15:45.000Z",
			"updatedAt": "2023-06-20T08:15:45.000Z"
		}
	]
}
```

* `/api/artists/:idArtist` pour obtenir les données d'un artiste précis selon l'id passé dans l'url.

Exemple de réponse si l'authentification est un succès :

```json
{
	"message": "Un artiste a bien été trouvé.",
	"data": {
		"id": 1,
		"name": "Da Vinci2",
		"url": "coucou.jpg",
		"created": "2023-06-20T08:15:45.000Z",
		"updatedAt": "2023-06-20T08:15:45.000Z"
	}
}

```
