# 🚀 Deployment Guide

This guide covers different deployment options for your EduTech Landing Page.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git repository set up

## 🌐 Deployment Options

### 1. Netlify Deployment (Recommended for Frontend)

#### Quick Deploy
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `client/build`
   - **Base directory**: `client`

#### Environment Variables
Set these in Netlify dashboard:
```
REACT_APP_API_URL=https://your-api-domain.com/api
REACT_APP_APP_NAME=EduTech Platform
```

#### Configuration
The `netlify.toml` file is already configured for:
- Build settings
- Redirects for SPA routing
- Environment-specific configurations

### 2. Vercel Deployment

#### Quick Deploy
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project root
3. Follow the prompts

#### Configuration
The `vercel.json` file handles:
- Frontend and backend deployment
- API routes configuration
- Environment variables

### 3. Docker Deployment

#### Build and Run
```bash
# Build and start all services
docker-compose up --build

# Run in background
docker-compose up -d

# Stop services
docker-compose down
```

#### Individual Services
```bash
# Build client
cd client
docker build -t edutech-client .

# Build server
cd server
docker build -t edutech-server .
```

### 4. Traditional VPS Deployment

#### Server Setup
```bash
# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
npm install -g pm2

# Clone repository
git clone <your-repo-url>
cd edutech-landing

# Install dependencies
npm run install-all

# Build client
npm run build
```

#### Start Services
```bash
# Start server with PM2
pm2 start server/index.js --name "edutech-server"

# Serve client with nginx or PM2
pm2 serve client/build 3000 --name "edutech-client"

# Save PM2 configuration
pm2 save
pm2 startup
```

## 🔧 Environment Configuration

### Client Environment Variables
Create `client/.env`:
```
REACT_APP_API_URL=https://your-api-domain.com/api
REACT_APP_APP_NAME=EduTech Platform
REACT_APP_VERSION=1.0.0
```

### Server Environment Variables
Create `server/.env`:
```
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://your-domain.com
```

## 🔍 Health Checks

### Server Health Check
The server includes a health check endpoint:
```
GET /api/health
```

### Docker Health Check
Docker containers include health checks for monitoring.

## 📊 Monitoring

### Production Monitoring
- Set up error tracking (Sentry, LogRocket)
- Monitor performance (Google Analytics, Hotjar)
- Server monitoring (PM2 monitoring, New Relic)

### Logs
```bash
# PM2 logs
pm2 logs

# Docker logs
docker-compose logs -f
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm run install-all
      - run: npm run build
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './client/build'
```

## 🛡️ Security Considerations

- Use HTTPS in production
- Set proper CORS origins
- Use environment variables for sensitive data
- Enable security headers (already configured in nginx.conf)
- Regular dependency updates

## 📈 Performance Optimization

- Enable gzip compression (configured in nginx.conf)
- Use CDN for static assets
- Implement caching strategies
- Optimize images and assets
- Monitor Core Web Vitals

## 🔧 Troubleshooting

### Common Issues
1. **Build fails**: Check Node.js version compatibility
2. **API not accessible**: Verify CORS and environment variables
3. **Routing issues**: Ensure SPA redirects are configured
4. **Performance issues**: Check bundle size and optimize

### Debug Commands
```bash
# Check build output
npm run build

# Test server locally
npm run server

# Check client locally
npm run client

# View logs
pm2 logs
docker-compose logs
```

## 📞 Support

For deployment issues:
1. Check the logs first
2. Verify environment variables
3. Test locally before deploying
4. Check network connectivity and DNS settings
