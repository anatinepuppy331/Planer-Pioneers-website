# Planet Pioneers

## Overview
Planet Pioneers is a web application dedicated to raising awareness and driving impactful climate initiatives. The project consists of a backend built with Node.js and Express, and a frontend developed using HTML, CSS, and JavaScript.

## Project Structure
```
planet-pioneers
├── backend
│   ├── app.js                # Entry point for the backend application
│   ├── routes                # Contains route definitions
│   │   └── index.js          # API routes
│   ├── controllers           # Contains business logic for routes
│   │   └── index.js          # Controller functions
│   ├── models                # Data models for the application
│   │   └── index.js          # Mongoose models
│   └── package.json          # NPM configuration file
├── frontend
│   ├── index.html            # Main HTML file for the frontend
│   ├── styles.css            # Styles for the frontend application
│   └── script.js             # JavaScript for handling user interactions
└── README.md                 # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (for database)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/planet-pioneers.git
   ```
2. Navigate to the backend directory:
   ```
   cd planet-pioneers/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
1. Start the backend server:
   ```
   node app.js
   ```
2. Open the frontend in your browser:
   - Open `frontend/index.html` in your preferred web browser.

## Usage
- The application allows users to make pledges and donations to support climate initiatives.
- Users can view progress reports and updates on the initiatives.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License. See the LICENSE file for details.