# 🗺️ Component Architecture Map

## Component Hierarchy

```
App.js (Root)
│
├── Navbar.jsx (Fixed/Sticky)
│   ├── Logo
│   ├── Navigation Links
│   ├── Book Demo Button
│   └── Mobile Menu Toggle
│
├── Main Content
│   │
│   ├── Hero.jsx
│   │   ├── Animated Background
│   │   ├── Badge (Active Learners)
│   │   ├── Headline
│   │   ├── Subheading
│   │   ├── CTA Buttons
│   │   ├── Stats Grid
│   │   └── Floating AI Button
│   │
│   ├── Vision.jsx
│   │   ├── Text Content (Left)
│   │   │   ├── Title
│   │   │   ├── Description
│   │   │   └── Features List (4 items)
│   │   └── Image (Right)
│   │
│   ├── Stats.jsx
│   │   └── Stats Grid (4 items)
│   │       ├── Icon
│   │       ├── Number
│   │       └── Label
│   │
│   ├── Courses.jsx
│   │   ├── Section Header
│   │   ├── Filter Tabs
│   │   ├── Course Grid
│   │   │   └── CourseCard (mapped)
│   │   │       ├── Thumbnail
│   │   │       ├── Category Badge
│   │   │       ├── Title
│   │   │       ├── Description
│   │   │       ├── Meta Info
│   │   │       └── Price + CTA
│   │   └── View All Button
│   │
│   ├── Testimonials.jsx
│   │   ├── Section Header
│   │   ├── Testimonial Card
│   │   │   ├── Quote Icon
│   │   │   ├── Avatar
│   │   │   ├── Star Rating
│   │   │   ├── Testimonial Text
│   │   │   └── Name + Role
│   │   └── Navigation
│   │       ├── Prev Button
│   │       ├── Dot Indicators
│   │       └── Next Button
│   │
│   ├── Team.jsx
│   │   ├── Section Header
│   │   └── Team Grid
│   │       └── TeamCard (mapped)
│   │           ├── Avatar
│   │           ├── Name
│   │           ├── Role
│   │           ├── Tagline
│   │           └── LinkedIn Link
│   │
│   ├── Blogs.jsx
│   │   ├── Section Header
│   │   ├── Blog Grid
│   │   │   └── BlogCard (mapped)
│   │   │       ├── Thumbnail
│   │   │       ├── Category Badge
│   │   │       ├── Title
│   │   │       ├── Preview
│   │   │       ├── Meta Info
│   │   │       └── Read More Link
│   │   └── View All Button
│   │
│   ├── Leaderboard.jsx
│   │   ├── Section Header
│   │   ├── Leaderboard Card
│   │   │   ├── Header (Gradient)
│   │   │   └── Leaderboard List
│   │   │       └── LeaderItem (mapped)
│   │   │           ├── Rank Badge
│   │   │           ├── Avatar
│   │   │           ├── Name + Courses
│   │   │           ├── Points
│   │   │           └── Progress Bar
│   │   └── CTA Button
│   │
│   ├── Quizzes.jsx
│   │   ├── Section Header
│   │   └── Quiz Grid
│   │       └── QuizCard (mapped)
│   │           ├── Icon
│   │           ├── Difficulty Badge
│   │           ├── Title
│   │           ├── Description
│   │           ├── Meta Info
│   │           ├── Progress Bar
│   │           └── Start Button
│   │
│   └── Contact.jsx
│       ├── Section Header
│       ├── Contact Info (Left)
│       │   ├── Description
│       │   ├── Contact Cards
│       │   │   ├── Email Card
│       │   │   ├── Phone Card
│       │   │   └── Location Card
│       │   └── WhatsApp Card
│       └── Contact Form (Right)
│           ├── Name Input
│           ├── Email Input
│           ├── Phone Input
│           ├── Subject Input
│           ├── Message Textarea
│           ├── Status Message
│           └── Submit Button
│
└── Footer.jsx
    ├── Newsletter Section
    │   ├── Heading
    │   └── Email Signup Form
    ├── Main Footer
    │   ├── Brand Section
    │   │   ├── Logo
    │   │   ├── Description
    │   │   └── Social Links
    │   └── Link Columns (4)
    │       ├── Company
    │       ├── Courses
    │       ├── Resources
    │       └── Legal
    └── Bottom Bar
        ├── Copyright
        └── Legal Links
```

---

## File Structure

```
client/src/
│
├── components/
│   ├── Navbar.jsx          → Navigation bar
│   ├── Hero.jsx            → Hero section
│   ├── Vision.jsx          → Vision & mission
│   ├── Stats.jsx           → Statistics section
│   ├── Courses.jsx         → Courses grid
│   ├── Testimonials.jsx    → Testimonial carousel
│   ├── Team.jsx            → Team members grid
│   ├── Blogs.jsx           → Blog posts grid
│   ├── Leaderboard.jsx     → Top learners list
│   ├── Quizzes.jsx         → Quiz dashboard
│   ├── Contact.jsx         → Contact form
│   └── Footer.jsx          → Footer section
│
├── services/
│   └── api.js              → API service layer
│
├── App.js                  → Main app component
├── index.js                → Entry point
└── index.css               → Global styles
```

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         FRONTEND                            │
│                                                             │
│  ┌──────────┐    ┌──────────┐    ┌──────────────────┐    │
│  │Component │───▶│ api.js   │───▶│ Axios HTTP       │    │
│  │(useEffect)│    │(service) │    │ Request          │    │
│  └──────────┘    └──────────┘    └──────────────────┘    │
│       ▲                                    │               │
│       │                                    ▼               │
│       │                            ┌──────────────┐       │
│       └────────────────────────────│   Response   │       │
│              (setState)            └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────┐
│                         BACKEND                             │
│                                                             │
│  ┌──────────┐    ┌──────────┐    ┌──────────────────┐    │
│  │ Express  │───▶│  Route   │───▶│  JSON Data       │    │
│  │ Server   │    │ Handler  │    │  File            │    │
│  └──────────┘    └──────────┘    └──────────────────┘    │
│       │                                    │               │
│       │                                    ▼               │
│       │                            ┌──────────────┐       │
│       └────────────────────────────│  Send JSON   │       │
│                                    └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Dependencies

### Navbar
- **Dependencies**: `react-router-dom`, `react-feather`
- **State**: `isOpen` (mobile menu), `isScrolled`
- **Props**: None
- **API Calls**: None

### Hero
- **Dependencies**: `react-feather`
- **State**: None
- **Props**: None
- **API Calls**: None
- **Features**: Smooth scroll to sections

### Vision
- **Dependencies**: `react-feather`
- **State**: None
- **Props**: None
- **API Calls**: None

### Stats
- **Dependencies**: `react-feather`
- **State**: None
- **Props**: None
- **API Calls**: None

### Courses
- **Dependencies**: `react-feather`, `axios`
- **State**: `courses`, `filteredCourses`, `activeFilter`, `loading`
- **Props**: None
- **API Calls**: `getCourses()`
- **Features**: Category filtering

### Testimonials
- **Dependencies**: `react-feather`, `axios`
- **State**: `testimonials`, `currentIndex`, `loading`
- **Props**: None
- **API Calls**: `getTestimonials()`
- **Features**: Carousel navigation

### Team
- **Dependencies**: `react-feather`, `axios`
- **State**: `team`, `loading`
- **Props**: None
- **API Calls**: `getTeam()`

### Blogs
- **Dependencies**: `react-feather`, `axios`
- **State**: `blogs`, `loading`
- **Props**: None
- **API Calls**: `getBlogs()`

### Leaderboard
- **Dependencies**: `react-feather`, `axios`
- **State**: `leaderboard`, `loading`
- **Props**: None
- **API Calls**: `getLeaderboard()`
- **Features**: Badge color logic

### Quizzes
- **Dependencies**: `react-feather`, `axios`
- **State**: `quizzes`, `loading`
- **Props**: None
- **API Calls**: `getQuizzes()`
- **Features**: Difficulty color logic

### Contact
- **Dependencies**: `react-feather`, `axios`
- **State**: `formData`, `status`, `loading`
- **Props**: None
- **API Calls**: `submitContact(data)`
- **Features**: Form validation, submission

### Footer
- **Dependencies**: `react-feather`
- **State**: None
- **Props**: None
- **API Calls**: None

---

## State Management Pattern

### Component State Structure

```javascript
// Example: Courses Component
const [courses, setCourses] = useState([]);           // All courses
const [filteredCourses, setFilteredCourses] = useState([]); // Filtered
const [activeFilter, setActiveFilter] = useState('All');    // Current filter
const [loading, setLoading] = useState(true);               // Loading state
```

### Data Fetching Pattern

```javascript
useEffect(() => {
  fetchData();
}, []); // Run once on mount

const fetchData = async () => {
  try {
    const response = await apiCall();
    setData(response.data);
    setLoading(false);
  } catch (error) {
    console.error('Error:', error);
    setLoading(false);
  }
};
```

---

## API Service Layer

### Location
`client/src/services/api.js`

### Functions
```javascript
getCourses(category)      // Fetch courses (optional filter)
getBlogs()                // Fetch all blogs
getLeaderboard()          // Fetch leaderboard
getQuizzes()              // Fetch quizzes
getTestimonials()         // Fetch testimonials
getTeam()                 // Fetch team members
submitContact(data)       // Submit contact form
```

### Usage Example
```javascript
import { getCourses } from '../services/api';

const fetchCourses = async () => {
  const response = await getCourses('Popular');
  setCourses(response.data);
};
```

---

## Styling Architecture

### TailwindCSS Utilities

**Custom Classes** (defined in `index.css`):
- `.btn-primary` → Primary button style
- `.btn-secondary` → Secondary button style
- `.card` → Card container with shadow
- `.section-title` → Large section heading
- `.section-subtitle` → Section description
- `.container-custom` → Max-width container

### Responsive Patterns

```javascript
// Mobile-first approach
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//         ↑ Mobile    ↑ Tablet      ↑ Desktop
```

### Animation Classes

```javascript
// Defined in tailwind.config.js
animate-fade-in    // Fade in animation
animate-slide-up   // Slide up animation
animate-float      // Floating animation
```

---

## Event Handling Patterns

### Smooth Scrolling
```javascript
const scrollToSection = (e, path) => {
  e.preventDefault();
  const element = document.querySelector(path);
  element.scrollIntoView({ behavior: 'smooth' });
};
```

### Filter Handling
```javascript
const handleFilter = (filter) => {
  setActiveFilter(filter);
  if (filter === 'All') {
    setFilteredCourses(courses);
  } else {
    setFilteredCourses(courses.filter(c => c.category === filter));
  }
};
```

### Form Submission
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    await submitContact(formData);
    setStatus({ type: 'success', message: 'Sent!' });
    setFormData({ ...initialState });
  } catch (error) {
    setStatus({ type: 'error', message: 'Failed!' });
  }
  setLoading(false);
};
```

---

## Component Communication

### Parent to Child
- Props (not heavily used in this flat structure)

### Child to Parent
- Callback functions (if needed)

### Sibling to Sibling
- Through parent state (if needed)
- URL hash for navigation (Navbar → Sections)

### Global State
- Currently: None (component-level state only)
- Future: Can add Context API or Redux

---

## Performance Considerations

### Current Optimizations
- ✅ Single API call per component
- ✅ Loading states prevent multiple renders
- ✅ Conditional rendering (loading/error states)
- ✅ Image optimization (CDN with size params)

### Future Optimizations
- [ ] React.memo for expensive components
- [ ] useMemo for filtered data
- [ ] useCallback for event handlers
- [ ] Code splitting with React.lazy
- [ ] Virtual scrolling for long lists
- [ ] Image lazy loading

---

## Testing Strategy (Future)

### Unit Tests
- Component rendering
- State updates
- Event handlers
- API service functions

### Integration Tests
- API calls and responses
- Form submissions
- Navigation flow

### E2E Tests
- User journeys
- Cross-browser testing
- Responsive behavior

---

## Deployment Architecture

```
┌─────────────────────────────────────────┐
│         PRODUCTION SETUP                │
│                                         │
│  Frontend (Vercel/Netlify)             │
│  ├── Static files                      │
│  ├── React build                       │
│  └── CDN distribution                  │
│                                         │
│  Backend (Heroku/Railway/Render)       │
│  ├── Express server                    │
│  ├── API endpoints                     │
│  └── JSON data files                   │
│                                         │
│  Environment Variables                  │
│  ├── API_BASE_URL (frontend)          │
│  └── PORT (backend)                    │
└─────────────────────────────────────────┘
```

---

## Quick Reference

### Add New Component
1. Create `ComponentName.jsx` in `components/`
2. Import in `App.js`
3. Add to JSX tree
4. Style with Tailwind classes

### Add New API Endpoint
1. Create JSON file in `server/data/`
2. Create route in `server/routes/`
3. Register route in `server/index.js`
4. Add service function in `client/src/services/api.js`
5. Call from component

### Modify Styles
1. Global: Edit `client/src/index.css`
2. Component: Add Tailwind classes
3. Theme: Edit `client/tailwind.config.js`

### Update Content
1. Static: Edit component JSX
2. Dynamic: Edit JSON files in `server/data/`
