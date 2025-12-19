Equipment Tracker – Full Stack Web Application

Equipment Tracker is a full-stack web application designed to efficiently manage and monitor equipment records in real time. The system enables users to add, view, update, delete, filter, and sort equipment data through an intuitive dashboard, making it suitable for organizations managing assets such as lab equipment, office resources, or inventory systems.

The application is built using a React frontend and a Node.js + Express backend, following a clean separation of concerns. Equipment data is managed via RESTful APIs and stored in a structured JSON format, ensuring simplicity, scalability, and easy integration with databases in future enhancements.

Key features include a dynamic equipment entry form, a responsive data table with filtering and sorting capabilities, and a modular component-based architecture. The project demonstrates practical experience in full-stack development, REST API design, and frontend-backend integration.

🚀 Key Features

Add, edit, and delete equipment records (CRUD operations)

Filter and sort equipment based on multiple attributes

Responsive and user-friendly UI

RESTful API architecture

Modular React component design

Clean project structure for easy scalability

🛠️ Tech Stack

Frontend: React.js, JavaScript, HTML, CSS

Backend: Node.js, Express.js

Data Storage: JSON (can be extended to MongoDB / SQL)

Version Control: Git & GitHub
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
├── backend/                     # Backend (Node.js + Express)
│   ├── data/
│   │   └── equipment.json       # Local JSON file to store equipment data
│   ├── routes/
│   │   └── equipment.js         # API routes for CRUD operations
│   ├── server.js                # Express server entry point
│   └── package.json             # Backend dependencies and scripts
│
├── frontend/                    # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── EquipmentForm.js # Form to add/edit equipment details
│   │   │   └── EquipmentTable.js# Table to display, filter, and sort equipment
│   │   ├── App.js               # Main React component
│   │   ├── App.css              # Application styling
│   │   └── index.js             # React DOM entry point
│   └── package.json             # Frontend dependencies and scripts
│
├── screenshots/                 # UI screenshots for documentation
│   ├── dashboard.png
│   ├── form.png
│   └── filter-sort.png
│
└── README.md                    # Project documentation


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




