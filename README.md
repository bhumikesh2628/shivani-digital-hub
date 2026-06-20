# CSV Shivani - Legal & Business Services Website

## Project Structure

```
website legal/
├── frontend-react/
│   ├── index.html        # Main HTML page
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── css/          # Stylesheets
│   │   ├── hooks/        # Custom React hooks
│   │   ├── App.jsx       # Main App component
│   │   └── main.jsx      # Entry point
│   ├── package.json      # Dependencies
│   └── vite.config.js    # Vite configuration
│
├── backend/             # Optional - only needed if you want to store submissions
│   ├── server.js         # Express server entry point
│   ├── .env              # Environment variables
│   ├── .env.example      # Environment variables template
│   ├── package.json      # Dependencies
│   ├── config/
│   │   └── db.js         # MongoDB connection
│   ├── models/
│   │   └── Contact.js    # Contact form data model
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   └── adminRoutes.js
│   ├── controllers/
│   │   ├── contactController.js
│   │   └── adminController.js
│   └── middleware/
│       └── authMiddleware.js  # JWT auth for admin
│
└── README.md
```

## Setup Instructions

### Frontend (React + Vite) - Required

1. Go to frontend-react folder:
   ```
   cd frontend-react
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser to the URL shown (usually `http://localhost:5173`)

### Backend - Optional

The backend is **optional**. The contact form now sends messages directly via WhatsApp, so you don't need the backend unless you want to store submissions in a database.

If you want to use the backend for data storage:

1. Go to backend folder:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Copy `.env.example` to `.env` and update with your values:
   ```
   cp .env.example .env
   ```
   
   Then edit `.env` with your MongoDB Atlas connection string:
   
   **Option 1: MongoDB Atlas (Recommended - Free, No Installation)**
   1. Go to https://www.mongodb.com/cloud/atlas and create a free account
   2. Create a new cluster (free tier)
   3. Create a database user with username and password
   4. Get your connection string from Atlas Dashboard → Connect → Connect your application
   5. Update `.env`:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/shivanidigitalhub
   JWT_SECRET=your_secret_key_here_change_this_in_production
   ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
   ```
   
   **Option 2: Local MongoDB**
   If you have MongoDB installed locally, use:
   ```
   MONGO_URI=mongodb://localhost:27017/shivanidigitalhub
   ```

4. Start the server:
   ```
   npm run dev
   ```

## Contact Form

The contact form now sends messages directly via WhatsApp to your phone number (+91 7990187675). No backend or database required.

To change the phone number, edit `frontend-react/src/components/Contact.jsx` and update the `phoneNumber` variable.

## API Endpoints (Backend Only - Optional)

| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| POST   | /api/contact              | Submit contact form      |
| GET    | /api/contact              | Get all contacts         |
| GET    | /api/admin/dashboard      | Admin dashboard stats    |
| PUT    | /api/admin/contact/:id    | Update contact status    |
| DELETE | /api/admin/contact/:id    | Delete a contact         |

> Admin routes require Bearer token in Authorization header.
