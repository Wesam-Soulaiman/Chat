# Chat App

A full-stack real-time chat application built with the MERN stack and Socket.IO. The app allows users to create accounts, log in securely, view contacts, start private conversations, send text or image messages, update their profile picture, and see which users are online in real time.

## Features

* User registration, login, logout, and authentication check.
* Secure JWT authentication using HTTP cookies.
* Password hashing with bcrypt.
* Protected backend routes for authenticated users only.
* Real-time private messaging using Socket.IO.
* Online users tracking.
* Contact list and existing chat partners list.
* Send text messages.
* Send image messages using Cloudinary upload.
* Profile picture update.
* Welcome email support using Resend.
* API protection using Arcjet for rate limiting and bot protection.
* Responsive React frontend built with Vite.
* Global state management using Zustand.
* Axios API client with credentials support.
* Toast notifications for user feedback.
* English/Arabic internationalization support with RTL layout handling.

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* DaisyUI
* Zustand
* Axios
* Socket.IO Client
* React Router
* i18next
* react-i18next
* React Hot Toast
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JSON Web Token
* bcryptjs
* Cookie Parser
* CORS
* Cloudinary
* Resend
* Arcjet
* dotenv

## Project Structure

```text
Chat/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── message.controller.js
│   │   ├── emails/
│   │   ├── lib/
│   │   │   ├── arcjet.js
│   │   │   ├── cloudinary.js
│   │   │   ├── db.js
│   │   │   ├── env.js
│   │   │   ├── resend.js
│   │   │   ├── socket.js
│   │   │   └── utils.js
│   │   ├── middlewares/
│   │   ├── models/
│   │   │   ├── Message.js
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   ├── auth.route.js
│   │   │   └── message.route.js
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── apis/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── router/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── i18n.js
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
├── package.json
└── README.md
```

## Requirements

Before running the project, make sure you have:

* Node.js 20 or later
* npm
* MongoDB database
* Cloudinary account for image uploads
* Resend account for email sending
* Arcjet key for API protection

## Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=3000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_sender_email
EMAIL_FROM_NAME=Chat App

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

Do not upload the `.env` file to GitHub.

## Installation

Clone the repository:

```bash
git clone https://github.com/Wesam-Soulaiman/Chat.git
cd Chat
```

Install backend dependencies:

```bash
npm install --prefix backend
```

Install frontend dependencies:

```bash
npm install --prefix frontend
```

## Run the Project in Development

Open two terminals.

### Terminal 1: Start the Backend

```bash
cd backend
npm run dev
```

The backend will run on:

```text
http://localhost:3000
```

### Terminal 2: Start the Frontend

```bash
cd frontend
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## Build for Production

From the root folder, run:

```bash
npm run build
```

Then start the backend server:

```bash
npm start
```

In production mode, the Express server serves the built React frontend from `frontend/dist`.

## API Endpoints

### Authentication Routes

| Method | Endpoint                   | Description                          |
| ------ | -------------------------- | ------------------------------------ |
| POST   | `/api/auth/signup`         | Create a new account                 |
| POST   | `/api/auth/login`          | Log in to an existing account        |
| POST   | `/api/auth/logout`         | Log out and clear the auth cookie    |
| GET    | `/api/auth/check`          | Check the current authenticated user |
| PUT    | `/api/auth/update-profile` | Update the user's profile picture    |

### Message Routes

| Method | Endpoint                 | Description                                                       |
| ------ | ------------------------ | ----------------------------------------------------------------- |
| GET    | `/api/messages/contacts` | Get all available contacts except the logged-in user              |
| GET    | `/api/messages/chats`    | Get users that already have conversations with the logged-in user |
| GET    | `/api/messages/:id`      | Get messages between the logged-in user and another user          |
| POST   | `/api/messages/send/:id` | Send a text or image message to another user                      |

## Database Models

### User

```js
{
  email: String,
  fullName: String,
  password: String,
  profilePic: String
}
```

### Message

```js
{
  senderId: ObjectId,
  recipientId: ObjectId,
  text: String,
  image: String
}
```

## Main Flow

1. A user creates an account or logs in.
2. The backend validates the data and generates a JWT cookie.
3. The frontend checks authentication status using `/api/auth/check`.
4. After login, the client connects to Socket.IO.
5. Online users are broadcasted to connected clients.
6. A user selects a contact and sends a message.
7. The message is saved in MongoDB.
8. If the receiver is online, the message is delivered instantly through Socket.IO.

## Security Notes

* Passwords are hashed before being saved.
* Authentication is handled using JWT stored in cookies.
* Protected routes require a valid token.
* Arcjet is used to protect API routes from abuse, bots, and rate-limit issues.
* CORS is configured to allow the frontend URL with credentials.
* Environment variables should be kept private.

## Future Improvements

* Add typing indicators.
* Add message seen/read status.
* Add group chat support.
* Add message deletion and editing.
* Add file attachments.
* Add user search.
* Add better error pages and loading states.
* Add tests for backend APIs and frontend components.

## Repository Description

A full-stack real-time chat application built with React, Node.js, Express, MongoDB, Socket.IO, JWT authentication, Cloudinary image uploads, and multilingual UI support.

## Author

Created by Wesam Soulaiman.
