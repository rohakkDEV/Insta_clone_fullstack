# Insta Clone — Full Stack Social Media App

A full-stack Instagram-inspired social media application built from scratch using Node.js, Express, MongoDB, and React. Built as part of a backend learning journey.

---

## Features

### Authentication
- User registration and login with JWT tokens
- HTTP-only cookie based authentication
- Protected routes on both frontend and backend
- Auth persistence across page refreshes via `/get-me` endpoint

### Posts
- Create posts with image upload (powered by ImageKit CDN)
- Feed showing all posts with populated user data
- Like and unlike posts
- Posts sorted by newest first

### Follow System
- Send follow requests to other users
- Follow requests have three states — pending, accepted, rejected
- Accept or decline incoming follow requests via notifications page
- Cannot follow yourself
- Re-request follow after being rejected

### UI
- Instagram-inspired dark theme
- Gradient story ring around profile pictures
- Sticky navbar with New Post, notifications bell, and Logout
- Responsive feed layout
- Loading states throughout

---

## Tech Stack

### Backend
| Tech | Usage |
|---|---|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database and ODM |
| JWT | Authentication tokens |
| bcryptjs | Password hashing |
| ImageKit | Image storage and CDN |
| Multer | Handling multipart file uploads |
| cookie-parser | Reading HTTP-only cookies |
| cors | Cross-origin request handling |

### Frontend
| Tech | Usage |
|---|---|
| React 19 + Vite | UI framework and build tool |
| React Router v8 | Client-side routing |
| Axios | HTTP requests with credentials |
| SCSS | Styling |
| Context API + Custom Hooks | State management |

---

## Project Structure

```
day-14/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   ├── post.controller.js
│   │   │   └── user.controller.js
│   │   ├── middlewares/
│   │   │   └── auth.middleware.js
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   ├── post.model.js
│   │   │   ├── like.model.js
│   │   │   └── follow.model.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── post.routes.js
│   │   │   └── user.routes.js
│   │   └── app.js
│   └── server.js
│
└── frontend/
    └── src/
        ├── features/
        │   ├── auth/
        │   │   ├── hooks/
        │   │   ├── pages/
        │   │   ├── services/
        │   │   ├── style/
        │   │   └── auth.context.jsx
        │   ├── post/
        │   │   ├── components/
        │   │   ├── hook/
        │   │   ├── pages/
        │   │   ├── services/
        │   │   ├── style/
        │   │   └── post.context.jsx
        │   └── shared/
        │       └── components/
        ├── App.jsx
        ├── AppRoutes.jsx
        └── main.jsx
```

---

## API Endpoints

### Auth — `/api/auth`
| Method | Route | Description | Auth |
|---|---|---|---|
| POST | `/register` | Register new user | No |
| POST | `/login` | Login user | No |
| GET | `/get-me` | Get current logged in user | Yes |
| POST | `/logout` | Logout user | No |

### Posts — `/api/posts`
| Method | Route | Description | Auth |
|---|---|---|---|
| POST | `/` | Create a new post | Yes |
| GET | `/` | Get logged in user's posts | Yes |
| GET | `/feed` | Get all posts feed | Yes |
| GET | `/details/:postId` | Get single post details | Yes |
| POST | `/like/:postId` | Like a post | Yes |
| POST | `/unlike/:postId` | Unlike a post | Yes |

### Users — `/api/users`
| Method | Route | Description | Auth |
|---|---|---|---|
| POST | `/follow/:username` | Send follow request | Yes |
| POST | `/unfollow/:username` | Unfollow a user | Yes |
| POST | `/follow-requests/:username/accept` | Accept follow request | Yes |
| POST | `/follow-requests/:username/reject` | Reject follow request | Yes |
| GET | `/follow-requests/pending` | Get pending follow requests | Yes |
| GET | `/:username/followers` | Get user's followers | Yes |
| GET | `/:username/following` | Get user's following | Yes |

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- ImageKit account

### Environment Variables

Create a `.env` file in the `backend` folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

### Installation

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Backend runs on `http://localhost:3000`
Frontend runs on `http://localhost:5173`

---

## What I Learned

- Building a REST API with Express from scratch
- JWT authentication flow with HTTP-only cookies
- Handling file uploads with Multer and storing on ImageKit CDN
- Designing MongoDB schemas with Mongoose including relationships between collections
- Implementing a follow request system with status states
- Connecting a React frontend to a Node.js backend with cookie-based auth
- Using React Context API and custom hooks for state management
- Debugging CORS issues with credentials
- Fixing DNS SRV lookup issues with MongoDB Atlas connection strings

---

## Known Limitations

- No comments on posts yet
- No profile page
- Not deployed (local development only)
- No real-time notifications
- Images uploaded with a fixed filename ("Test") — to be improved

---

## Author

Built by **[Your Name]** — Day 14 of backend learning journey.

GitHub: [your github profile]
LinkedIn: [your linkedin profile]
