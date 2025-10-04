# 🏗️ EduTech Landing Page - Architecture Documentation

## 🎯 System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                                │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────┐    │
│  │                    React Application                       │    │
│  │                   (localhost:3000)                         │    │
│  │                                                            │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐ │    │
│  │  │ Navbar   │  │  Hero    │  │ Courses  │  │  Blogs   │ │    │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘ │    │
│  │                                                            │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐ │    │
│  │  │Leaderboard│ │ Quizzes  │  │ Contact  │  │  Footer  │ │    │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘ │    │
│  │                                                            │    │
│  │                    ↓ API Calls ↓                          │    │
│  │              ┌─────────────────────┐                      │    │
│  │              │   API Service       │                      │    │
│  │              │   (Axios)           │                      │    │
│  │              └─────────────────────┘                      │    │
│  └───────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
                         HTTP Requests
                              ↓
┌─────────────────────────────────────────────────────────────────────┐
│                      Express Backend Server                         │
│                       (localhost:5000)                              │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────┐    │
│  │                    API Routes                              │    │
│  │                                                            │    │
│  │  /api/courses      /api/blogs       /api/leaderboard     │    │
│  │  /api/quizzes      /api/testimonials /api/team           │    │
│  │  /api/contact      /api/health                           │    │
│  │                                                            │    │
│  └───────────────────────────────────────────────────────────┘    │
│                              ↓                                      │
│  ┌───────────────────────────────────────────────────────────┐    │
│  │                    Route Handlers                          │    │
│  │                                                            │    │
│  │  courses.js    blogs.js      leaderboard.js              │    │
│  │  quizzes.js    testimonials.js  team.js  contact.js      │    │
│  │                                                            │    │
│  └───────────────────────────────────────────────────────────┘    │
│                              ↓                                      │
│  ┌───────────────────────────────────────────────────────────┐    │
│  │                    JSON Data Files                         │    │
│  │                                                            │    │
│  │  courses.json     blogs.json      leaderboard.json       │    │
│  │  quizzes.json     testimonials.json  team.json           │    │
│  │                                                            │    │
│  └───────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow Diagram

### Request Flow (Frontend → Backend)

```
User Action
    ↓
Component (useEffect/onClick)
    ↓
API Service Function (api.js)
    ↓
Axios HTTP Request
    ↓
Express Server (index.js)
    ↓
Route Handler (routes/*.js)
    ↓
Read JSON File (data/*.json)
    ↓
Send Response
    ↓
Axios Receives Data
    ↓
Component Updates State (setState)
    ↓
React Re-renders
    ↓
User Sees Updated UI
```

### Example: Loading Courses

```
1. User lands on page
   ↓
2. Courses component mounts
   ↓
3. useEffect() triggers
   ↓
4. fetchCourses() called
   ↓
5. getCourses() from api.js
   ↓
6. axios.get('/api/courses')
   ↓
7. Express receives request
   ↓
8. coursesRoutes handler
   ↓
9. Read courses.json
   ↓
10. res.json(coursesData)
    ↓
11. Axios receives response
    ↓
12. setCourses(response.data)
    ↓
13. setLoading(false)
    ↓
14. Component re-renders
    ↓
15. Courses displayed to user
```

---

## 📦 Component Architecture

### Component Hierarchy

```
App (Root)
│
├── Navbar (Always Visible - Fixed)
│   ├── Logo
│   ├── Navigation Links
│   ├── CTA Button
│   └── Mobile Menu
│
├── Main Content (Scrollable)
│   │
│   ├── Hero
│   │   ├── Background Animation
│   │   ├── Headline
│   │   ├── CTAs
│   │   └── Stats
│   │
│   ├── Vision
│   │   ├── Text Content
│   │   └── Image
│   │
│   ├── Stats
│   │   └── Stat Items (x4)
│   │
│   ├── Courses
│   │   ├── Filter Tabs
│   │   └── Course Cards (mapped)
│   │
│   ├── Testimonials
│   │   ├── Testimonial Card
│   │   └── Navigation
│   │
│   ├── Team
│   │   └── Team Cards (mapped)
│   │
│   ├── Blogs
│   │   └── Blog Cards (mapped)
│   │
│   ├── Leaderboard
│   │   └── Leaderboard Items (mapped)
│   │
│   ├── Quizzes
│   │   └── Quiz Cards (mapped)
│   │
│   └── Contact
│       ├── Contact Info
│       └── Contact Form
│
└── Footer (Always at Bottom)
    ├── Newsletter
    ├── Links
    └── Social Media
```

---

## 🗄️ State Management

### Component State Pattern

```javascript
// Each data-driven component follows this pattern:

const Component = () => {
  // State declarations
  const [data, setData] = useState([]);           // Main data
  const [loading, setLoading] = useState(true);   // Loading state
  const [error, setError] = useState(null);       // Error state (optional)
  
  // Data fetching
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency = run once on mount
  
  const fetchData = async () => {
    try {
      const response = await apiCall();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
      setLoading(false);
    }
  };
  
  // Conditional rendering
  if (loading) return <LoadingState />;
  if (error) return <ErrorState />;
  
  return <DataDisplay data={data} />;
};
```

### State Locations

| Component | State Variables | Purpose |
|-----------|----------------|---------|
| Navbar | `isOpen`, `isScrolled` | Menu state, scroll detection |
| Courses | `courses`, `filteredCourses`, `activeFilter`, `loading` | Course data & filtering |
| Testimonials | `testimonials`, `currentIndex`, `loading` | Testimonial data & carousel |
| Team | `team`, `loading` | Team member data |
| Blogs | `blogs`, `loading` | Blog post data |
| Leaderboard | `leaderboard`, `loading` | Leaderboard data |
| Quizzes | `quizzes`, `loading` | Quiz data |
| Contact | `formData`, `status`, `loading` | Form state & submission |

---

## 🔌 API Architecture

### Service Layer Pattern

```
Component
    ↓
API Service (api.js)
    ↓
Axios Instance
    ↓
HTTP Request
    ↓
Backend
```

### API Service Structure

```javascript
// client/src/services/api.js

import axios from 'axios';

// Base configuration
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' }
});

// Service functions
export const getCourses = (category) => api.get('/courses', { params: { category } });
export const getBlogs = () => api.get('/blogs');
export const submitContact = (data) => api.post('/contact', data);

// Usage in components
import { getCourses } from '../services/api';

const response = await getCourses('Popular');
setCourses(response.data);
```

---

## 🛣️ Routing Architecture

### Frontend Routing (React Router)

```javascript
// Single Page Application (SPA)
// All sections on one page, navigation via smooth scroll

<Router>
  <Navbar />              // Links scroll to sections
  <Hero id="hero" />
  <Courses id="courses" />
  <Blogs id="blogs" />
  <Contact id="contact" />
  <Footer />
</Router>

// Navigation
<a href="#courses" onClick={scrollToSection}>Courses</a>

// Smooth scroll function
const scrollToSection = (e, path) => {
  e.preventDefault();
  document.querySelector(path).scrollIntoView({ behavior: 'smooth' });
};
```

### Backend Routing (Express)

```javascript
// server/index.js

app.use('/api/courses', coursesRoutes);
app.use('/api/blogs', blogsRoutes);
app.use('/api/contact', contactRoutes);

// server/routes/courses.js

router.get('/', (req, res) => {
  const { category } = req.query;
  // Filter and return data
  res.json(filteredData);
});

router.get('/:id', (req, res) => {
  const course = data.find(c => c.id === parseInt(req.params.id));
  res.json(course);
});
```

---

## 🎨 Styling Architecture

### TailwindCSS Layer System

```
Base Layer (Tailwind defaults)
    ↓
Custom Base Styles (index.css)
    ↓
Component Utilities (.btn-primary, .card)
    ↓
Inline Tailwind Classes (component JSX)
    ↓
Responsive Modifiers (md:, lg:)
    ↓
State Modifiers (hover:, focus:)
```

### Style Hierarchy

```css
/* 1. Global Styles (index.css) */
* { margin: 0; padding: 0; }

/* 2. Custom Utilities */
.btn-primary { @apply bg-primary text-white px-6 py-3 rounded-lg; }

/* 3. Component Styles (inline) */
<button className="btn-primary hover:scale-105 transition-all">

/* 4. Responsive */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

/* 5. State-based */
<div className="card hover:shadow-xl hover:-translate-y-1">
```

---

## 📱 Responsive Architecture

### Breakpoint System

```
Mobile First Approach:

Base (< 640px)
    ↓
sm: (640px+)
    ↓
md: (768px+)
    ↓
lg: (1024px+)
    ↓
xl: (1280px+)
```

### Responsive Patterns

```javascript
// Grid that adapts
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
// Mobile: 1 column
// Tablet: 2 columns
// Desktop: 3 columns

// Hide on mobile, show on desktop
"hidden md:flex"

// Different padding
"px-4 md:px-6 lg:px-8"

// Font size scaling
"text-2xl md:text-4xl lg:text-5xl"
```

---

## 🔐 Security Architecture

### Current Implementation

```
Frontend
    ↓
CORS Enabled (allows frontend origin)
    ↓
Express Backend
    ↓
JSON Data (read-only)
```

### Security Features

1. **CORS Configuration**: Only allows specific origins
2. **Input Validation**: Form validation on frontend
3. **No Sensitive Data**: All data is dummy/public
4. **No Authentication**: MVP doesn't require it

### Future Security Enhancements

```
1. Add Authentication (JWT)
2. Add Input Sanitization
3. Add Rate Limiting
4. Add HTTPS
5. Add Environment Variables
6. Add Database with proper access control
```

---

## 🚀 Deployment Architecture

### Development Environment

```
┌─────────────────────────────────────┐
│     Local Machine                   │
│                                     │
│  Frontend: localhost:3000           │
│  Backend:  localhost:5000           │
│                                     │
│  Hot Reload: ✅                     │
│  Dev Tools:  ✅                     │
└─────────────────────────────────────┘
```

### Production Environment (Recommended)

```
┌─────────────────────────────────────────────────┐
│              FRONTEND (Vercel)                  │
│                                                 │
│  - Static React Build                          │
│  - CDN Distribution                            │
│  - Auto HTTPS                                  │
│  - Custom Domain                               │
│                                                 │
│  URL: https://edutech.vercel.app               │
└─────────────────────────────────────────────────┘
                    ↓ API Calls
┌─────────────────────────────────────────────────┐
│              BACKEND (Railway)                  │
│                                                 │
│  - Express Server                              │
│  - API Endpoints                               │
│  - JSON Data                                   │
│  - Auto HTTPS                                  │
│                                                 │
│  URL: https://edutech-api.railway.app          │
└─────────────────────────────────────────────────┘
```

---

## 📊 Performance Architecture

### Current Optimizations

```
1. Single API Call per Component
   - Data fetched once on mount
   - Stored in component state

2. Conditional Rendering
   - Loading states prevent blank screens
   - Error boundaries (can be added)

3. Image Optimization
   - CDN URLs with size parameters
   - Lazy loading (can be added)

4. Code Organization
   - Component-based splitting
   - Service layer abstraction
```

### Future Optimizations

```
1. React.memo()
   - Prevent unnecessary re-renders

2. useMemo() / useCallback()
   - Memoize expensive calculations

3. Code Splitting
   - React.lazy() for route-based splitting

4. Image Lazy Loading
   - Load images as they enter viewport

5. Service Worker
   - Offline functionality
   - Cache API responses

6. CDN
   - Serve static assets from CDN
```

---

## 🧪 Testing Architecture (Future)

### Testing Pyramid

```
        ┌─────────────┐
        │   E2E Tests │  (Few)
        │  (Cypress)  │
        └─────────────┘
       ┌───────────────┐
       │Integration Tests│  (Some)
       │  (Supertest)   │
       └───────────────┘
      ┌─────────────────┐
      │   Unit Tests    │  (Many)
      │ (Jest + RTL)    │
      └─────────────────┘
```

### Test Coverage Plan

```
Unit Tests:
- Component rendering
- State updates
- Event handlers
- Utility functions

Integration Tests:
- API endpoints
- Data flow
- Form submissions

E2E Tests:
- User journeys
- Navigation flow
- Form workflows
```

---

## 🔄 Scalability Architecture

### Current (MVP)

```
React (Client State)
    ↓
Express (REST API)
    ↓
JSON Files (Data)
```

### Future Scaling Path

```
React (Client State)
    ↓
Redux/Context (Global State)
    ↓
Next.js (SSR/SSG)
    ↓
Express (REST API)
    ↓
GraphQL (Optional)
    ↓
MongoDB/PostgreSQL (Database)
    ↓
Redis (Caching)
    ↓
Microservices (Optional)
```

---

## 📈 Monitoring Architecture (Future)

```
Frontend Monitoring:
- Google Analytics
- Error tracking (Sentry)
- Performance monitoring (Lighthouse)

Backend Monitoring:
- API response times
- Error rates
- Server health
- Database queries

User Analytics:
- Page views
- User flows
- Conversion tracking
- A/B testing
```

---

## 🔧 Development Workflow

```
1. Local Development
   ├── Edit code
   ├── Hot reload
   └── Test in browser

2. Version Control
   ├── Git commit
   ├── Git push
   └── GitHub

3. Deployment
   ├── Frontend → Vercel
   ├── Backend → Railway
   └── Auto-deploy on push

4. Monitoring
   ├── Check logs
   ├── Monitor errors
   └── Track performance
```

---

## 📚 Documentation Architecture

```
README.md              → Entry point, overview
    ↓
START.md              → Quick start guide
    ↓
SETUP.md              → Detailed setup
    ↓
FEATURES.md           → Feature documentation
    ↓
COMPONENT_MAP.md      → Component details
    ↓
ARCHITECTURE.md       → This file
    ↓
PROJECT_SUMMARY.md    → Complete summary
```

---

## 🎯 Architecture Principles

1. **Separation of Concerns**: Frontend/Backend/Data separated
2. **Component-Based**: Reusable, modular components
3. **Service Layer**: Centralized API calls
4. **Mobile-First**: Responsive from the ground up
5. **Scalable**: Easy to extend and modify
6. **Documented**: Comprehensive documentation
7. **Clean Code**: Readable, maintainable
8. **Best Practices**: Following React/Express conventions

---

**Architecture Version**: 1.0.0
**Last Updated**: 2025-10-01
**Status**: Production Ready ✅
