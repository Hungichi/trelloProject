# Trello Clone - MERN Stack

A full-stack Trello clone built with MongoDB, Express.js, React, and Node.js.

## Features

- User Authentication (Sign up/Sign in)
- Create and manage boards
- Create lists and cards
- Drag and drop functionality
- Real-time updates
- Board permissions
- Member management

## Tech Stack

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Socket.io for real-time updates

### Frontend
- React 18
- React Router
- Axios for API calls
- React Beautiful DnD for drag & drop
- Socket.io-client for real-time updates

## Project Structure

```
/trello_project
├── /client          # React frontend
├── /server          # Node.js backend
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Backend
   cd server
   npm install
   
   # Frontend
   cd ../client
   npm install
   ```

3. Setup environment variables:
   - Copy `server/env.example` to `server/.env`
   - Update the values in `.env`

4. Start the development servers:
   ```bash
   # Backend (from server directory)
   npm run dev
   
   # Frontend (from client directory)
   npm run dev
   ```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user

### Boards
- GET `/api/boards` - Get user's boards
- POST `/api/boards` - Create new board
- GET `/api/boards/:id` - Get board by ID
- PUT `/api/boards/:id` - Update board
- DELETE `/api/boards/:id` - Delete board

### Lists
- GET `/api/boards/:boardId/lists` - Get lists in board
- POST `/api/boards/:boardId/lists` - Create new list
- PUT `/api/lists/:id` - Update list
- DELETE `/api/lists/:id` - Delete list

### Cards
- GET `/api/lists/:listId/cards` - Get cards in list
- POST `/api/lists/:listId/cards` - Create new card
- PUT `/api/cards/:id` - Update card
- DELETE `/api/cards/:id` - Delete card

## Development

This project follows a feature-based architecture with clear separation of concerns:

- **Models**: Database schemas and business logic
- **Controllers**: Request handling and response logic
- **Routes**: API endpoint definitions
- **Middlewares**: Authentication, validation, error handling
- **Services**: Business logic and external integrations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
