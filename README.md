# YAC
Yet Another Chat (React)


# Features:
* Login (just login by nickname)
* Can't be 2 people with same nickname
* Chat room with the whole history
* An input to type messages
* Message must be appended to the chat of all participants
* Messages must show the sender and time
* Integrage the text input with a Youtube Bot. The goal is to type a message inside text input with the followling format:
    * Text format: `/youtube any_string`
      * Must query youtube search api with `any_string` 
      * Take the first value of the search
      * Append a message to the chat room with embed youtube player with first value
  

## Frontend:
* Javascript:
  * React
  * Redux
* Create `.env`
  ```
  REACT_APP_NODE_ENV=
  REACT_APP_BASE_URL=
  REACT_APP_YOUTUBE_API_KEY=
  ```
  
* HTML/CSS bootstrap

## Backend:
* Application:
  * NodeJS
  * MongoDB (MLab)
* Create `.env`
  ```
  PORT=
  DB_HOST=
  DB_PORT=
  DB_NAME=
  DB_USER=
  DB_PASS=
  ```

## Platform:
* Backend run on heroku free plan
* Frontend run on netlify
