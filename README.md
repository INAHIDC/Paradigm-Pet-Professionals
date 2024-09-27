# Consultation Form Full Stack Application - C773 Final

## Overview
This project is a full-stack application where users can submit pet consultation requests. The form collects basic contact and pet information, which is saved in a MongoDB database. The app uses Node.js and Express for the back-end and HTML/CSS/JavaScript for the front-end.

## Tech Stack
- **Front-End**: HTML, CSS, JavaScript
- **Back-End**: Node.js, Express.js
- **Database**: MongoDB

## File Structure   
bash
consultation-app/
│
├── backend/                        # Node.js, Express
│   ├── models/                     # Mongoose models
│   │   └── Consultation.js         # Consultation
│   ├── routes/                     # API 
│   │   └── consultation.js         # Form API route
│   ├── .env                        # Environment
│   ├── server.js                   # server file
│   ├── package.json                # Backend dependencies
│
├── frontend/                       # HTML, CSS, JS
│   ├── public/
│   │   ├── index.html              # HTML form page
│   │   ├── style.css               # Styles for the form page
│   ├── src/
│   │   └── app.js                  # Frontend JavaScript
│   └── package.json                # Optional for frontend build
│
└── README.md                       # Project (this file)

bash

##To Run Project

### 1. Set Up Backend
1. Clone the repository:
   ```bash
   git clone <https://github.com/INAHIDC/Paradigm-Pet-Professionals>
   cd consultation-app/backend
Install dependencies:
bash

npm install
Create a .env file in the backend folder:
bash

MONGO_URI=mongodb://localhost:27017/consultationdb
PORT=5000
Start the server:
bash

npm run dev
2. Set Up Frontend
Open the frontend/public/index.html file in your browser.
Or use a simple server:
bash

cd frontend/public
live-server
Submit a Form
Open the frontend (index.html).
Fill out the form.
Data is submitted to the backend and stored in MongoDB.
API Endpoints
POST /api/consultation: Submits form data.
Request Body:
json

{
  "name": "John Doe",
  "phone": "123-456-7890",
  "email": "john@example.com",
  "timezone": "EST",
  "petName": "Max",
  "petType": "Dog",
  "petAge": "3"
}
Contact
SM : nchow31@wgu.edu
Professor : Dr. Cynthia 






