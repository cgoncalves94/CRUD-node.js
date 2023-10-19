# CRUD with Node.js  

A simple Node.js application using Express and MongoDB.


## Files

- `app.js`: Main entry point. Sets up the Express server, routes, and MongoDB connection.
- `posts.js`: Contains routes for CRUD operations related to posts.
- `Post.js`: Mongoose model for posts.

## Endpoints

- **GET** `/posts`: Retrieves a list of posts.
- **GET** `/posts/:postId`: Gets a post by its ID.
- **POST** `/posts`: Creates a new post.
- **PATCH** `/posts/:postId`: Updates a post by its ID.
- **DELETE** `/posts/:postId`: Deletes a post by its ID.

## Dependencies

- Express
- Mongoose
- dotenv
- body-parser
