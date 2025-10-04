# 📦 Complete Installation Guide

## 🎯 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

| Software | Minimum Version | Check Command | Download Link |
|----------|----------------|---------------|---------------|
| Node.js | 14.x or higher | `node --version` | https://nodejs.org/ |
| npm | 6.x or higher | `npm --version` | (comes with Node.js) |
| Git | Any recent version | `git --version` | https://git-scm.com/ |

### Verify Installation

```powershell
# Check Node.js version
node --version
# Should output: v14.x.x or higher

# Check npm version
npm --version
# Should output: 6.x.x or higher

# Check Git version (optional)
git --version
# Should output: git version 2.x.x
```

---

## 🚀 Installation Steps

### Step 1: Navigate to Project Directory

```powershell
# Open PowerShell or Terminal
cd C:\Users\harsh\CascadeProjects\edutech-landing
```

### Step 2: Install Root Dependencies

```powershell
# Install backend dependencies
npm install
```

**Expected Output:**
```
added 150 packages, and audited 151 packages in 15s
```

**Dependencies Installed:**
- express (^4.18.2)
- cors (^2.8.5)
- dotenv (^16.3.1)
- nodemon (^3.0.1)
- concurrently (^8.2.1)

### Step 3: Install Client Dependencies

```powershell
# Navigate to client directory
cd client

# Install frontend dependencies
npm install

# Return to root
cd ..
```

**Expected Output:**
```
added 1500+ packages, and audited 1501 packages in 45s
```

**Dependencies Installed:**
- react (^18.2.0)
- react-dom (^18.2.0)
- react-router-dom (^6.16.0)
- react-feather (^2.0.10)
- axios (^1.5.0)
- tailwindcss (^3.3.3)
- react-scripts (5.0.1)

### Alternative: One-Command Installation

```powershell
# From root directory
npm run install-all
```

This command will:
1. Install root dependencies
2. Navigate to client folder
3. Install client dependencies
4. Return to root

---

## ✅ Verify Installation

### Check Installed Packages

```powershell
# Check root packages
npm list --depth=0

# Check client packages
cd client
npm list --depth=0
cd ..
```

### Check for Errors

If you see any errors during installation:

#### Error: EACCES (Permission Denied)

**Windows:**
```powershell
# Run PowerShell as Administrator
# Then retry installation
```

**Solution:**
```powershell
npm cache clean --force
npm install
```

#### Error: Network Timeout

```powershell
# Increase timeout
npm config set fetch-timeout 60000

# Use different registry (if needed)
npm config set registry https://registry.npmjs.org/

# Retry installation
npm install
```

#### Error: Node Version Incompatible

```powershell
# Check your Node version
node --version

# If below v14, update Node.js from nodejs.org
```

---

## 🏃 Running the Application

### Method 1: Run Both Servers Concurrently (Recommended)

```powershell
# From root directory
npm run dev
```

**What This Does:**
- Starts backend on port 5000
- Starts frontend on port 3000
- Opens browser automatically
- Enables hot reload for both

**Expected Output:**
```
[0] 🚀 Server running on http://localhost:5000
[1] webpack compiled successfully
[1] Compiled successfully!
[1] 
[1] You can now view edutech-client in the browser.
[1] 
[1]   Local:            http://localhost:3000
```

### Method 2: Run Servers Separately

**Terminal 1 (Backend):**
```powershell
npm run server
```

**Expected Output:**
```
[nodemon] starting `node server/index.js`
🚀 Server running on http://localhost:5000
```

**Terminal 2 (Frontend):**
```powershell
npm run client
```

**Expected Output:**
```
Starting the development server...
Compiled successfully!

You can now view edutech-client in the browser.
  Local:            http://localhost:3000
```

---

## 🧪 Testing the Installation

### 1. Test Backend API

Open a new terminal and run:

```powershell
# Test health endpoint
curl http://localhost:5000/api/health

# Expected response:
# {"status":"OK","message":"EduTech API is running"}

# Test courses endpoint
curl http://localhost:5000/api/courses

# Expected: JSON array of courses
```

**Or open in browser:**
- http://localhost:5000/api/health
- http://localhost:5000/api/courses
- http://localhost:5000/api/blogs

### 2. Test Frontend

Open browser to: http://localhost:3000

**Checklist:**
- [ ] Page loads without errors
- [ ] Navbar is visible and sticky
- [ ] Hero section displays
- [ ] Courses section shows course cards
- [ ] All sections are visible
- [ ] Mobile menu works (resize browser)
- [ ] Forms are interactive
- [ ] No console errors (F12 → Console)

### 3. Test API Integration

In browser console (F12):

```javascript
// Test API call
fetch('http://localhost:5000/api/courses')
  .then(res => res.json())
  .then(data => console.log(data));

// Should log array of courses
```

---

## 🐛 Troubleshooting

### Port Already in Use

**Error Message:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution:**

```powershell
# Find process using port 5000
netstat -ano | findstr :5000

# Output example:
# TCP    0.0.0.0:5000    0.0.0.0:0    LISTENING    12345

# Kill the process (replace 12345 with actual PID)
taskkill /PID 12345 /F

# Retry starting the server
npm run server
```

**For Port 3000:**
```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
npm run client
```

### Module Not Found

**Error Message:**
```
Error: Cannot find module 'express'
```

**Solution:**
```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -r node_modules
rm -r client/node_modules

# Reinstall
npm install
cd client && npm install && cd ..
```

### CORS Errors

**Error in Browser Console:**
```
Access to XMLHttpRequest at 'http://localhost:5000/api/courses' 
from origin 'http://localhost:3000' has been blocked by CORS policy
```

**Solution:**
1. Ensure backend is running
2. Check `server/index.js` has `app.use(cors())`
3. Restart backend server

### React Scripts Not Found

**Error Message:**
```
'react-scripts' is not recognized as an internal or external command
```

**Solution:**
```powershell
cd client
npm install react-scripts --save
cd ..
```

### Blank Page in Browser

**Possible Causes:**
1. Backend not running
2. API URL incorrect
3. JavaScript errors

**Solution:**
```powershell
# 1. Check backend is running
npm run server

# 2. Check browser console (F12) for errors

# 3. Check API URL in client/src/services/api.js
# Should be: http://localhost:5000/api

# 4. Clear browser cache and reload
```

---

## 🔧 Configuration

### Change Backend Port

**File:** `server/index.js`

```javascript
// Change this line:
const PORT = process.env.PORT || 5000;

// To:
const PORT = process.env.PORT || 8000; // Your preferred port
```

### Change Frontend Port

**File:** `client/.env` (create if doesn't exist)

```
PORT=3001
```

### Update API URL

**File:** `client/src/services/api.js`

```javascript
// Change this line:
const API_BASE_URL = 'http://localhost:5000/api';

// To match your backend port:
const API_BASE_URL = 'http://localhost:8000/api';
```

---

## 📁 Directory Structure After Installation

```
edutech-landing/
├── node_modules/              ✅ Installed
├── client/
│   ├── node_modules/          ✅ Installed
│   ├── public/
│   ├── src/
│   └── package.json
├── server/
│   ├── data/
│   ├── routes/
│   └── index.js
├── package.json
└── [documentation files]
```

---

## 🎯 Post-Installation Checklist

- [ ] Node.js and npm installed
- [ ] Project dependencies installed (root)
- [ ] Client dependencies installed
- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] API endpoints respond correctly
- [ ] Frontend displays all sections
- [ ] No console errors
- [ ] Mobile responsive (test by resizing)
- [ ] Forms work correctly

---

## 🚀 Next Steps After Installation

### 1. Explore the Application
- Browse all sections
- Test course filtering
- Try the contact form
- Check mobile responsiveness

### 2. Customize Content
```powershell
# Edit data files
notepad server/data/courses.json
notepad server/data/blogs.json
# etc.
```

### 3. Customize Styling
```powershell
# Edit Tailwind config
notepad client/tailwind.config.js

# Edit global styles
notepad client/src/index.css
```

### 4. Add Your Branding
- Update logo in Navbar and Footer
- Change colors in Tailwind config
- Update contact information

---

## 📊 Installation Time Estimates

| Step | Time | Notes |
|------|------|-------|
| Prerequisites Check | 2 min | If already installed |
| Root Dependencies | 1-2 min | Depends on internet speed |
| Client Dependencies | 3-5 min | Larger package set |
| First Run | 1 min | Compilation time |
| **Total** | **7-10 min** | First-time setup |

---

## 💡 Pro Tips

1. **Use npm run dev**: Easiest way to run both servers
2. **Keep terminals open**: Don't close while developing
3. **Check console**: Always monitor for errors
4. **Hot reload**: Changes auto-refresh (no restart needed)
5. **Git commit**: Save your changes regularly
6. **Backup data**: Keep original JSON files safe

---

## 🆘 Getting Help

### Check Documentation
1. `README.md` - Project overview
2. `START.md` - Quick start guide
3. `SETUP.md` - Detailed setup
4. `TROUBLESHOOTING.md` - Common issues

### Common Resources
- **Node.js Issues**: https://nodejs.org/en/docs/
- **npm Issues**: https://docs.npmjs.com/
- **React Issues**: https://react.dev/
- **TailwindCSS**: https://tailwindcss.com/docs

### Debug Checklist
- [ ] Check Node.js version
- [ ] Check npm version
- [ ] Clear npm cache
- [ ] Delete node_modules and reinstall
- [ ] Check for port conflicts
- [ ] Check firewall settings
- [ ] Try different terminal (PowerShell vs CMD)

---

## ✅ Installation Complete!

If you've reached this point without errors, congratulations! 🎉

Your EduTech landing page is now ready to use.

**Access your application:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

**Start developing:**
```powershell
npm run dev
```

---

**Installation Guide Version**: 1.0.0
**Last Updated**: 2025-10-01
**Status**: Complete ✅
