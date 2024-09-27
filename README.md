# Consultation Form Full Stack Application - C773 Final

## Introduction
This project is a full stack application where users can submit pet consultation requests. The form collects basic contact and pet information, which is saved in a MongoDB database. The app uses Node.js and Express for the back-end and HTML/CSS/JavaScript for the front end.

## Stack
- **Front-End**: HTML, CSS, JavaScript
- **Back-End**: Node.js, Express.js
- **Database**: MongoDB

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
Student Contact
SM : nchow31@wgu.edu
Professor : Dr. Cynthia 






