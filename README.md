# Weather App

This is a weather application that displays weather data from various endpoints.

## Project Structure

The project is divided into two main directories:

- `weather-app`: This directory contains the frontend of the application, which is a React application built with TypeScript.

- `backend`: This directory contains the backend of the application, which is an Express.js server that serves the weather data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository: https://github.com/syafiqbs/weather-app.git

2. Navigate to backend
```
cd backend
npm install
```

3. Navigate to frontend:
```
cd weather-app
npm install
```

## Database Setup
The backend uses a MySQL database to store weather data. You need to set up your MySQL database to run the backend.

1. Update the `user` and `password` fields in the `createConnection` method in `server.js` with your MySQL credentials:

```javascript
const db = mysql.createConnection({
    host: "localhost",
    user: "YOUR_USER",
    password: "YOUR_PASSWORD",
    database: "weather"
});
```

2. Import the weather.sql file into your MySQL database.

## Running the Weather-App

The weather-app can run independently without the backend. 
After the backend server is up and running, you can start the weather-app:
```
cd weather-app
npm start
```

If you want to test the local database functionality, make sure the backend server is running. Open another terminal:
```
cd backend
npm start
```








