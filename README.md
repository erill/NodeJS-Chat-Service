# Chat Service

Simple NodeJS chat service with React client app.

Given that this is my first NodeJS application in life and I'm full frontend developer at the moment, there are some things that could be improved.
Those are:
- SQL command in ChatsController.js file to get all needed information by single query
- API unit tests - focus more on different scenarios
- NodeJS babel configuration 
- introduce Typescript

# Required

Installed node version v14.6.0 or higher

### Installing
## NodeJS Service
```
cd server
npm install
npm run server
```

## React Client application 
Simple React application to store and display "/chats" resulst fetched from service.
```
cd client
npm install
npm run start
```

### Running the API tests
```
cd server
npm run test
```


### Running client app with NodeJS service

To run backend service open terminal window and run below commands

```
cd server
npm run server
```

To run client application open second terminal window and run below commands

```
cd client
npm run start
```
