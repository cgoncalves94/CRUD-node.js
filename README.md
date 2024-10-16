
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

## Linting Workflow

This repository includes a GitHub Actions workflow for linting JavaScript code using ESLint. The workflow runs automatically on every push to the main branch and on pull requests, ensuring that code quality is maintained consistently throughout the development process.

### Key Features of the Linting Workflow:
- **Automated Linting**: Code changes are checked for adherence to coding standards.
- **Real-time Feedback**: Provides immediate feedback on code quality during pull requests.
- **Custom ESLint Configuration**: The ESLint configuration is set up to accommodate ES modules and CommonJS as needed.

### How to Run Linting Locally
To run the linting process locally, use the following command:

```bash
npm run lint
```
