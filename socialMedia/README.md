# Social Media Backend

This folder contains a simple social media backend built with Node.js, Express, TypeScript and MongoDB. It demonstrates basic CRUD operations for users and posts.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with the following variables:
   ```env
   PORT=3000
   DB_NAME=your_db_name
   MONGODB_URI=mongodb://localhost:27017
   ```
3. Start the development server:
   ```bash
   npm run start
   ```

The API exposes `/users` and `/posts` endpoints for creating and fetching users and posts.
