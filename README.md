🛠️ Equipment Tracker

A simple full-stack web application to manage and track equipment records.
Built as part of an intern take-home assignment to demonstrate frontend, backend, and basic data persistence skills.

📌 Features

View all equipment in a tabular format

Add new equipment records

Edit existing equipment details

Delete equipment records

Search equipment by name

Filter equipment by type and status

Sort equipment by name, type, status, and last cleaned date

🧱 Tech Stack

Frontend

React

JavaScript

HTML

CSS

Backend

Node.js

Express.js

REST API

Database / Storage

JSON file (for simplicity)

📂 Project Structure
equipment-tracker/
│
├── backend/
│   ├── data/
│   │   └── equipment.json
│   ├── routes/
│   │   └── equipment.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EquipmentForm.js
│   │   │   └── EquipmentTable.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
└── README.md

▶️ How to Run Locally
1️⃣ Clone the Repository
git clone https://github.com/sreeyadora/equipment-tracker.git
cd equipment-tracker

2️⃣ Start Backend Server
cd backend
npm install
npm start


Backend will run at:

http://localhost:5000

3️⃣ Start Frontend Application

Open a new terminal window:

cd frontend
npm install
npm start


Frontend will run at:

http://localhost:3000

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/equipment	Get all equipment
POST	/api/equipment	Add new equipment
PUT	/api/equipment/:id	Update equipment
DELETE	/api/equipment/:id	Delete equipment
📝 Assumptions

Single-user system

No authentication required

JSON file used instead of a database for simplicity

Client-side filtering and sorting

🚀 Future Improvements

Replace JSON storage with a database (MongoDB / PostgreSQL)

Add authentication and role-based access

Improve UI with a component library

Add pagination for large datasets

Add unit and integration tests

👩‍💻 Author

Sreeya Dora
GitHub: https://github.com/sreeyadora

✅ Submission Notes

This project focuses on clean code, functionality, and clarity

UI kept minimal and professional as per requirements

Bonus features (search, filter, sorting) included
