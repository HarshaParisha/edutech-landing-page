# 🚀 Quick Deploy Commands

## Step 1: Initialize Git and Push to GitHub

Open terminal in the project root (`C:\Users\harsh\CascadeProjects\edutech-landing\`) and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Complete EduTech landing page with React frontend and Node.js backend"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/HarshaParisha/edutech-landing-page.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

### Option A: Connect GitHub Repository (Recommended)
1. Go to https://netlify.com
2. Click "New site from Git"
3. Choose "GitHub" and authorize
4. Select your repository: `HarshaParisha/edutech-landing-page`
5. Configure build settings:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/build`
6. Click "Deploy site"

### Option B: Manual Deploy (Faster for testing)
1. Build the project locally:
```bash
cd client
npm install
npm run build
```
2. Go to https://netlify.com
3. Drag and drop the `client/build` folder to Netlify

## Step 3: Configure Environment Variables (if needed)

In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add these variables:
   - `REACT_APP_API_URL`: `https://your-api-domain.com/api`
   - `REACT_APP_APP_NAME`: `EduTech Platform`

## Step 4: Custom Domain (Optional)

1. In Netlify dashboard → Domain settings
2. Add custom domain or use the provided netlify.app URL

## Troubleshooting

If build fails:
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check for any missing environment variables

Your site will be live at: `https://your-site-name.netlify.app`
