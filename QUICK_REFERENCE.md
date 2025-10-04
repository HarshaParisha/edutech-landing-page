# 🚀 Quick Reference Card

## ⚡ Essential Commands

```powershell
# Install all dependencies
npm run install-all

# Start development (both frontend + backend)
npm run dev

# Start backend only
npm run server

# Start frontend only
npm run client

# Build for production
npm run build
```

---

## 🌐 URLs

| Service | URL | Description |
|---------|-----|-------------|
| Frontend | http://localhost:3000 | React app |
| Backend | http://localhost:5000 | Express API |
| Health Check | http://localhost:5000/api/health | API status |

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `client/src/App.js` | Main React component |
| `client/src/index.css` | Global styles |
| `client/tailwind.config.js` | Tailwind configuration |
| `server/index.js` | Express server |
| `server/data/*.json` | Dummy data files |

---

## 🎨 Customization Quick Guide

### Change Colors
**File**: `client/tailwind.config.js`
```javascript
colors: {
  primary: '#2563EB',    // Your primary color
  secondary: '#10B981',  // Your secondary color
  accent: '#3B82F6',     // Your accent color
}
```

### Update Content
**Location**: `server/data/`
- `courses.json` - Course listings
- `blogs.json` - Blog posts
- `team.json` - Team members
- `testimonials.json` - User reviews
- `leaderboard.json` - Top learners
- `quizzes.json` - Quiz topics

### Modify Logo
**Files**: 
- `client/src/components/Navbar.jsx` (line ~30)
- `client/src/components/Footer.jsx` (line ~50)

### Change Fonts
**File**: `client/public/index.html`
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

Then update `client/tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/courses` | All courses |
| GET | `/api/courses?category=Popular` | Filtered courses |
| GET | `/api/blogs` | All blogs |
| GET | `/api/leaderboard` | Top 10 learners |
| GET | `/api/quizzes` | All quizzes |
| GET | `/api/testimonials` | All testimonials |
| GET | `/api/team` | Team members |
| POST | `/api/contact` | Submit contact form |

---

## 🧩 Component Locations

| Component | File Path |
|-----------|-----------|
| Navbar | `client/src/components/Navbar.jsx` |
| Hero | `client/src/components/Hero.jsx` |
| Vision | `client/src/components/Vision.jsx` |
| Stats | `client/src/components/Stats.jsx` |
| Courses | `client/src/components/Courses.jsx` |
| Testimonials | `client/src/components/Testimonials.jsx` |
| Team | `client/src/components/Team.jsx` |
| Blogs | `client/src/components/Blogs.jsx` |
| Leaderboard | `client/src/components/Leaderboard.jsx` |
| Quizzes | `client/src/components/Quizzes.jsx` |
| Contact | `client/src/components/Contact.jsx` |
| Footer | `client/src/components/Footer.jsx` |

---

## 🎨 Tailwind Utility Classes

### Custom Classes (defined in index.css)
```css
.btn-primary          /* Primary button */
.btn-secondary        /* Secondary button */
.card                 /* Card container */
.section-title        /* Large heading */
.section-subtitle     /* Section description */
.container-custom     /* Max-width container */
```

### Common Patterns
```javascript
// Responsive grid
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Card with hover
"card hover:shadow-xl hover:-translate-y-1"

// Gradient background
"bg-gradient-to-r from-primary to-secondary"

// Centered container
"container-custom mx-auto px-4"
```

---

## 🐛 Troubleshooting

### Port Already in Use
```powershell
# Find process on port 5000
netstat -ano | findstr :5000

# Kill process
taskkill /PID <PID> /F
```

### Dependencies Not Installing
```powershell
# Clear cache
npm cache clean --force

# Delete and reinstall
rm -r node_modules
npm install
```

### API Not Connecting
1. Check backend is running: `npm run server`
2. Verify port 5000 is free
3. Check `client/src/services/api.js` has correct URL

### Build Errors
```powershell
# Clear build cache
cd client
rm -r node_modules
rm -r build
npm install
npm run build
```

---

## 📊 Project Structure

```
edutech-landing/
├── client/                    # Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/       # 12 components
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── server/                    # Backend
│   ├── data/                 # 6 JSON files
│   ├── routes/               # 7 route files
│   └── index.js
│
└── package.json              # Root
```

---

## 🎯 Common Tasks

### Add New Course
1. Open `server/data/courses.json`
2. Add new object to array
3. Restart server
4. Refresh frontend

### Add New Component
1. Create `ComponentName.jsx` in `client/src/components/`
2. Import in `App.js`
3. Add to JSX tree

### Change Section Order
Edit `client/src/App.js` and reorder components in JSX

### Add New API Endpoint
1. Create JSON file in `server/data/`
2. Create route in `server/routes/`
3. Register in `server/index.js`
4. Add function in `client/src/services/api.js`

---

## 🚀 Deployment Checklist

### Frontend (Vercel)
- [ ] Push code to GitHub
- [ ] Connect Vercel to repo
- [ ] Set build command: `cd client && npm run build`
- [ ] Set output directory: `client/build`
- [ ] Add environment variable: `REACT_APP_API_URL`

### Backend (Railway)
- [ ] Push code to GitHub
- [ ] Connect Railway to repo
- [ ] Set start command: `npm run server`
- [ ] Add environment variable: `PORT`
- [ ] Note the deployed URL

### Update API URL
In `client/src/services/api.js`:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `START.md` | Quick start guide |
| `SETUP.md` | Detailed setup |
| `FEATURES.md` | Feature list |
| `COMPONENT_MAP.md` | Architecture |
| `PROJECT_SUMMARY.md` | Complete summary |
| `CHECKLIST.md` | Completion checklist |
| `QUICK_REFERENCE.md` | This file |
| `WELCOME.txt` | ASCII welcome |

---

## 💡 Pro Tips

1. **Hot Reload**: Changes auto-refresh in development
2. **Console Logs**: Check browser console for errors
3. **Network Tab**: Debug API calls in DevTools
4. **Mobile View**: Use DevTools responsive mode
5. **Git**: Commit often, push regularly
6. **Backups**: Keep original JSON files safe
7. **Testing**: Test on real mobile devices
8. **Performance**: Use Lighthouse for audits

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | #2563EB | Buttons, links, accents |
| Secondary | #10B981 | Success, highlights |
| Accent | #3B82F6 | Hover states |
| Background | #FFFFFF | Main background |
| Gray Light | #F9FAFB | Section backgrounds |
| Text Dark | #1F2937 | Headings |
| Text Medium | #6B7280 | Body text |

---

## 📱 Responsive Breakpoints

| Name | Width | Columns | Prefix |
|------|-------|---------|--------|
| Mobile | < 640px | 1 | (default) |
| Tablet | 640px+ | 2 | `md:` |
| Desktop | 1024px+ | 3-4 | `lg:` |
| Large | 1280px+ | 4 | `xl:` |

---

## 🔥 Hot Keys (VS Code)

| Key | Action |
|-----|--------|
| `Ctrl + P` | Quick file open |
| `Ctrl + Shift + F` | Search in files |
| `Ctrl + B` | Toggle sidebar |
| `Ctrl + `` ` | Toggle terminal |
| `Alt + Up/Down` | Move line |
| `Ctrl + /` | Comment line |

---

## 📞 Support Resources

- **Documentation**: Check all `.md` files
- **TailwindCSS**: https://tailwindcss.com/docs
- **React**: https://react.dev/
- **Express**: https://expressjs.com/

---

## ✅ Quick Checklist

- [ ] Dependencies installed
- [ ] Server running on port 5000
- [ ] Frontend running on port 3000
- [ ] All sections visible
- [ ] Forms working
- [ ] API calls successful
- [ ] Mobile responsive
- [ ] No console errors

---

**Last Updated**: 2025-10-01
**Version**: 1.0.0
**Status**: Production Ready ✅
