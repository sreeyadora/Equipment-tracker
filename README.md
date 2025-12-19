# 🛠️ Equipment Tracker

A simple full-stack web application to manage and track equipment records.  
This project was built as part of an intern take-home assignment to demonstrate frontend, backend, and basic data persistence skills.

---

## 📸 Screenshots

<img width="1906" height="904" alt="image" src="https://github.com/user-attachments/assets/6401d15f-2831-400c-b6fb-c26c6a827fad" />

<img width="1897" height="893" alt="image" src="https://github.com/user-attachments/assets/5cb59a65-701a-4e55-ae52-786e6dc3347b" />

<img width="1901" height="890" alt="image" src="https://github.com/user-attachments/assets/3add2c8f-86a3-45a8-8dfc-69acbc09a9d8" />




### Dashboard View
![Equipment Tracker Dashboard](<img width="1891" height="883" alt="image" src="https://github.com/user-attachments/assets/e4630bc0-d874-40be-b071-8a3afc6ea2ba" />
)

### Add / Edit Equipment
![Add Edit Equipment](<img width="1310" height="357" alt="image" src="https://github.com/user-attachments/assets/1b3635e7-7f95-43af-9514-78245ce2f356" />
)

### Search, Filter & Sorting
![Search Filter Sort](<img width="1808" height="746" alt="image" src="https://github.com/user-attachments/assets/22cc06f0-7a46-4b9e-9059-40899f0c5bfc" />
)

---

## 📌 Features

- View equipment in a table format
- Add new equipment
- Edit existing equipment details
- Delete equipment records
- Search equipment by name
- Filter equipment by type and status
- Sort equipment by name, type, status, and last cleaned date

---

## 🧱 Tech Stack

**Frontend**
- React
- JavaScript
- HTML
- CSS

**Backend**
- Node.js
- Express.js
- REST API

**Database / Storage**
- JSON file (used for simplicity)

---

## 📂 Project Structure
equipment-tracker/
├── backend/
│ ├── data/
│ │ └── equipment.json
│ ├── routes/
│ │ └── equipment.js
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── EquipmentForm.js
│ │ │ └── EquipmentTable.js
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ └── package.json
│
├── screenshots/
│ ├── dashboard.png
│ ├── form.png
│ └── filter-sort.png
│
└── README.md


---

## ▶️ How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/sreeyadora/equipment-tracker.git

### 2️⃣ Start Backend Server
cd equipment-tracker
cd backend
npm install
npm start

###Backend runs at:
http://localhost:5000

###3️⃣ Start Frontend Application

Open a new terminal:

cd frontend
npm install
npm start

###Frontend runs at:

http://localhost:3000

---

#🔌 API Endpoints
Method	Endpoint	Description
GET	/api/equipment	Get all equipment
POST	/api/equipment	Add new equipment
PUT	/api/equipment/:id	Update equipment
DELETE	/api/equipment/:id	Delete equipment

#📝 Assumptions

Single-user system

No authentication required

JSON file used instead of a database

Client-side search, filtering, and sorting

#🚀 Future Improvements

Replace JSON storage with a database (MongoDB / PostgreSQL)

Add authentication and role-based access

Improve UI using a component library

Add pagination for large datasets

Add unit and integration tests

## 👩‍💻 Author

**Sreeya Dora**  

- GitHub: https://github.com/sreeyadora  
- LinkedIn: https://www.linkedin.com/in/sreeya-dora/




