# game-pass-hub

A React frontend using an Express/Node backend, Game Pass Hub provides users with information regarding the library of games on Xbox Game Pass.

The primary source of data comes from IGDB, but this third-party API does not provide data specific to games on Game Pass, such as the date games were added to Game Pass, the date they are leaving Game Pass and whether or not they are on Game Pass at all.

I had to create my own backend and database for this project, and merge the data with calls to the IGDB API. This means that Game Pass Hub can leverage on dynamic data from IGDB (game ratings, game summaries, screenshots etc.), and merge that with data from my database more specific for Game Pass.

APP GOALS
---------
My goal in creating Game Pass Hub was primarily to enhance my knowledge across multiple disciplines of web development, including: UI/UX, creating an API, accessing third party APIs and more.

FRONTEND
--------
The frontend was made using React, and I chose not to rely on an extensive third-party library such as Material-UI for this. I wanted to use this project as an opportunity for me to gain experience in creating React components from the ground up, including styling, state management, custom hooks and more.

BACKEND
-------
The backend is essentially an API that I created using NodeJS, Express, Mongoose and MongoDB. It is relatively rudimentary and is not an exhaustive example of backend/API design, but it gave me the opportunity to work with api error handling, data transformation, routes, route handlers, schemas and more.

