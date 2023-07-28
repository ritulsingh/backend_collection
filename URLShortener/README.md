# URL Shortener

Welcome to the URL Shortener Backend documentation! This section provides detailed information about the API endpoints available in the URL Shortener Backend. These endpoints allow you to perform various operations related to Urls.

## Description:

URL Shortener is a Node.js-based backend project that provides a simple and efficient way to shorten URLs and track click analytics. It offers a RESTful API for creating, managing, and accessing shortened URLs.

## Tech Stack

The project uses the following technologies:

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine.
- **Express**.js: A fast, opinionated, and minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database used to store shortened URLs and analytics data.
- **Mongoose**: An elegant MongoDB object modeling for Node.js.
- **Swagger UI**: A tool for visualizing and interacting with the API's resources.
- **npm**: A package manager for Node.js modules and dependencies.

## Features:

- Shorten long URLs into short, shareable links.
- Retrieve the original URL from a shortened URL.
- Redirect users to the original URL when accessing the short link.
- Track click analytics for each shortened URL.

## Table of Contents:

- Installation
- Usage
- API Documentation
- Contributing
- License

### Installation:

1. Clone the repository:
   git clone https://github.com/ritulsingh/backend_collection.git
   cd url-shortener

2. Install dependencies:
   npm install

3. Set up the environment variables:
   Copy the .env.example file and rename it to .env. Configure the environment variables as needed.

4. Run the application:
   npm start
   The application will be available at http://localhost:3000.

### Usage:

- Create a short URL: Send a POST request to /api/urlShort/shorten with the url parameter in the request body.
- Retrieve the original URL: Send a GET request to /api/urlShort/:shortCode, where :shortCode is the short code of the shortened URL.
- Redirect to the original URL: Access /:shortCode in your browser, where :shortCode is the short code of the shortened URL.
- Get analytics data: Send a GET request to /api/analytics/:shortCode, where :shortCode is the short code of the shortened URL.

### API Documentation:

#### Shorten URL:

- **Method**: POST
- **Endpoint**: /api/urlShort/shorten
- **Description**: Shorten a URL
- **Access**: Public
- **Parameters**:
  - url (string): The URL to be shortened.
- **Response**: The shortened URL.

#### Retrieve URL:

- **Method**: GET
- **Endpoint**: /api/urlShort/:shortCode
- **Description**: Retrieve the original URL from a shortened URL
- **Access**: Public
- **Parameters**:
  - shortCode (string): The short code of the shortened URL.
- **Response**: The original URL.

#### Redirect:

- **Method**: GET
- **Endpoint**: /:shortCode
- **Description**: Redirect to the original URL from a shortened URL
- **Access**: Public
- **Parameters**:
  - shortCode (string): The short code of the shortened URL.

#### Analytics:

- **Method**: GET
- **Endpoint**: /api/analytics/:shortCode
- **Description**: Retrieve analytics data for a shortened URL
- **Access**: Public
- **Parameters**:
  - shortCode (string): The short code of the shortened URL.
- **Response**: The click data for the shortened URL.

For detailed API documentation and example usage, refer to the Swagger UI page after running the application.

### Contributing:

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch: git checkout -b feature/my-feature
3. Commit your changes: git commit -m "Add my feature"
4. Push to the branch: git push origin feature/my-feature
5. Submit a pull request.

### License:

This project is licensed under the MIT License - see the LICENSE file for details.
