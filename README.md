# Project Title

A simple Node.js application using Express and MongoDB.

## Installation

\```bash
npm install
\```

## Usage

To start the server:

\```bash
npm start
\```

## Files

- `app.js`: Main entry point. Sets up the Express server, routes, and MongoDB connection.
- `posts.js`: Contains routes for CRUD operations related to posts.
- `Post.js`: Mongoose model for posts.

## Endpoints

- **GET** `/posts`: Retrieves a list of posts.
- **POST** `/posts`: Creates a new post.
- **GET** `/posts/:postId`: Gets a post by its ID.
- **PATCH** `/posts/:postId`: Updates a post by its ID.
- **DELETE** `/posts/:postId`: Deletes a post by its ID.

## Dependencies

- Express
- Mongoose
- dotenv
- body-parser
