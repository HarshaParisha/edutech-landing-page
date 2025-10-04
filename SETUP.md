# EduTech Landing Page - Setup Guide

## 🚀 Quick Start

Follow these steps to get the project running on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

#### 1. Install Root Dependencies

```bash
cd C:\Users\harsh\CascadeProjects\edutech-landing
npm install
```

#### 2. Install Client Dependencies

```bash
cd client
npm install
cd ..
```

#### 3. Run the Application

From the root directory, run:

```bash
npm run dev
```

This will start:
- **Backend API** on `http://localhost:5000`
- **Frontend** on `http://localhost:3000`

The browser should automatically open to `http://localhost:3000`.

### Alternative: Run Separately

If you prefer to run backend and frontend separately:

#### Terminal 1 - Backend
```bash
npm run server
```

#### Terminal 2 - Frontend
```bash
npm run client
```

## 📁 Project Structure

```
edutech-landing/
├── client/                     # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/        # All React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Vision.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── Blogs.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   ├── Quizzes.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── services/
│   │   │   └── api.js         # API service layer
│   │   ├── App.js             # Main app component
│   │   ├── index.js           # Entry point
│   │   └── index.css          # Global styles
│   ├── package.json
│   ├── tailwind.config.js     # Tailwind configuration
│   └── postcss.config.js
├── server/                     # Express Backend
│   ├── data/                  # JSON data files
│   │   ├── courses.json
│   │   ├── blogs.json
│   │   ├── leaderboard.json
│   │   ├── quizzes.json
│   │   ├── testimonials.json
│   │   └── team.json
│   ├── routes/                # API routes
│   │   ├── courses.js
│   │   ├── blogs.js
│   │   ├── leaderboard.js
│   │   ├── quizzes.js
│   │   ├── testimonials.js
│   │   ├── team.js
│   │   └── contact.js
│   └── index.js               # Express server
├── package.json               # Root package.json
└── README.md

```

## 🎨 Features Implemented

### Frontend Components

1. **Navbar** - Sticky navigation with smooth scrolling
2. **Hero Section** - Full-width banner with gradient background and CTAs
3. **Vision & USP** - Two-column layout with mission statement
4. **Stats Section** - User statistics with gradient background
5. **Courses Section** - Filterable course grid with category tabs
6. **Testimonials** - Carousel with user reviews
7. **Team Section** - Grid layout of team members
8. **Blogs Section** - Blog cards with metadata
9. **Leaderboard** - Top 10 learners with progress bars
10. **Quizzes Dashboard** - Interactive quiz cards
11. **Contact Form** - Functional contact form with validation
12. **Footer** - Comprehensive footer with newsletter signup

### Backend API Endpoints

- `GET /api/courses` - Fetch all courses (with optional category filter)
- `GET /api/courses/:id` - Fetch single course
- `GET /api/blogs` - Fetch all blog posts
- `GET /api/blogs/:id` - Fetch single blog
- `GET /api/leaderboard` - Fetch leaderboard data
- `GET /api/quizzes` - Fetch all quizzes
- `GET /api/quizzes/:id` - Fetch single quiz
- `GET /api/testimonials` - Fetch testimonials
- `GET /api/team` - Fetch team members
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check endpoint

## 🎨 Design Features

- **Apple-like minimalist design** with clean typography
- **Responsive layouts** - Mobile-first approach
- **Smooth animations** - Fade-ins, slide-ups, hover effects
- **Gradient accents** - Modern color schemes
- **Interactive elements** - Hover states, transitions
- **Custom scrollbar** - Styled for better UX
- **Sticky navbar** - Always accessible navigation
- **Floating AI chat button** - Bottom-right corner

## 🛠️ Tech Stack

- **Frontend**: React 18, TailwindCSS 3, React Router 6, React Feather Icons, Axios
- **Backend**: Node.js, Express, CORS
- **Styling**: TailwindCSS with custom configuration
- **Fonts**: Inter (Google Fonts)
- **Icons**: React Feather (SVG-based)

## 📝 Customization

### Change Colors

Edit `client/tailwind.config.js`:

```javascript
colors: {
  primary: '#2563EB',    // Change primary color
  secondary: '#10B981',  // Change secondary color
  accent: '#3B82F6',     // Change accent color
}
```

### Add More Data

Edit JSON files in `server/data/` directory to add more courses, blogs, etc.

### Modify API Port

Edit `server/index.js` to change the port:

```javascript
const PORT = process.env.PORT || 5000;
```

And update `client/src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

## 🚀 Production Build

### Build Frontend

```bash
cd client
npm run build
```

This creates an optimized production build in `client/build/`.

### Deploy

You can deploy the backend and frontend separately:

- **Backend**: Deploy to Heroku, Railway, Render, or any Node.js hosting
- **Frontend**: Deploy to Vercel, Netlify, or serve the build folder

## 📞 Support

For issues or questions, check the README.md or contact the development team.

## 📄 License

MIT License - Feel free to use this project for learning or commercial purposes.
