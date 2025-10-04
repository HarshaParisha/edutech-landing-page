# 🚀 Quick Start Guide

## First Time Setup

### Step 1: Install Dependencies

Open PowerShell/Terminal in the project root and run:

```powershell
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### Step 2: Start the Application

From the root directory:

```powershell
npm run dev
```

**That's it!** The application will start:
- Backend API: http://localhost:5000
- Frontend: http://localhost:3000 (opens automatically)

---

## Troubleshooting

### Port Already in Use

If port 3000 or 5000 is already in use:

1. **Find and kill the process:**
   ```powershell
   # For port 5000
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   
   # For port 3000
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

2. **Or change the port:**
   - Backend: Edit `server/index.js` (line with `PORT`)
   - Frontend: Create `.env` in client folder with `PORT=3001`

### Dependencies Not Installing

```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -r node_modules
rm -r client/node_modules
npm install
cd client && npm install
```

### Module Not Found Errors

Make sure you're in the correct directory:
```powershell
# Should be in: C:\Users\harsh\CascadeProjects\edutech-landing
pwd
```

---

## Running Separately

If `npm run dev` doesn't work, run in two separate terminals:

**Terminal 1 (Backend):**
```powershell
npm run server
```

**Terminal 2 (Frontend):**
```powershell
npm run client
```

---

## Testing the API

Once the backend is running, test endpoints:

```powershell
# Health check
curl http://localhost:5000/api/health

# Get courses
curl http://localhost:5000/api/courses

# Get blogs
curl http://localhost:5000/api/blogs
```

Or open in browser:
- http://localhost:5000/api/health
- http://localhost:5000/api/courses
- http://localhost:5000/api/blogs

---

## Next Steps

1. ✅ Install dependencies
2. ✅ Start the application
3. 🌐 Open http://localhost:3000
4. 🎨 Explore the landing page
5. 📝 Customize content in `server/data/` folder
6. 🎨 Modify styles in `client/src/index.css`

---

## Features to Explore

- **Smooth Scrolling**: Click nav links to scroll to sections
- **Course Filters**: Click Popular/Trending/New tabs
- **Testimonial Carousel**: Navigate through reviews
- **Contact Form**: Submit a test message (check server console)
- **Responsive Design**: Resize browser to see mobile view
- **Hover Effects**: Hover over cards and buttons

---

## Need Help?

Check `SETUP.md` for detailed documentation or `README.md` for project overview.
