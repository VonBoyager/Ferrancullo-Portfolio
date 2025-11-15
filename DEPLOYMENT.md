# GitHub Pages Deployment Guide

## 🚀 Quick Setup

### 1. Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `ferrancullo-portfolio` (or your preferred name)
3. Make it public
4. Don't initialize with README (we already have files)

### 2. Push Your Code
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio setup"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/ferrancullo-portfolio.git

# Push to main branch
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 4. Automatic Deployment
The GitHub Actions workflow will automatically:
- Build your project when you push to `main` branch
- Deploy to GitHub Pages
- Your site will be available at: `https://YOUR_USERNAME.github.io/ferrancullo-portfolio/`

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📝 Important Notes

### Update Repository Name
If your repository name is different from `ferrancullo-portfolio`, update the `base` path in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/YOUR_REPO_NAME/', // Change this
  // ... rest of config
})
```

### Custom Domain (Optional)
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

## 🎯 Your Portfolio Will Be Live At:
`https://YOUR_USERNAME.github.io/ferrancullo-portfolio/`

## 🔄 Updating Your Portfolio
Simply push changes to the `main` branch:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The GitHub Actions will automatically rebuild and redeploy your site!
