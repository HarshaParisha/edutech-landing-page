# 🎨 Assets Guide

This guide explains how to organize and use assets in your EduTech Landing Page.

## 📁 Asset Structure

```
client/src/assets/
├── images/
│   ├── hero/              # Hero section images
│   ├── courses/           # Course thumbnails and images
│   ├── team/              # Team member photos
│   ├── testimonials/      # Customer photos
│   ├── blog/              # Blog post images
│   ├── logos/             # Company and partner logos
│   └── backgrounds/       # Background images
├── icons/
│   ├── features/          # Feature icons
│   ├── social/            # Social media icons
│   ├── ui/                # UI icons (arrows, buttons, etc.)
│   └── tech/              # Technology stack icons
└── videos/
    ├── hero/              # Hero section videos
    ├── demos/             # Product demo videos
    └── testimonials/      # Video testimonials
```

## 🖼️ Image Guidelines

### Recommended Formats
- **Photos**: JPG (compressed, 80-90% quality)
- **Graphics/Logos**: PNG (with transparency)
- **Simple graphics**: SVG (scalable, small file size)
- **Modern browsers**: WebP (better compression)

### Image Sizes
- **Hero images**: 1920x1080px (16:9 ratio)
- **Course thumbnails**: 400x225px (16:9 ratio)
- **Team photos**: 300x300px (square)
- **Blog images**: 800x400px (2:1 ratio)
- **Logos**: SVG preferred, or PNG 200x200px max

### Optimization
- Compress images before adding to project
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Consider lazy loading for better performance

## 🎯 Icon Guidelines

### Icon Sets
- Use consistent icon style (outline, filled, or mixed)
- Recommended: Feather Icons, Heroicons, or Lucide
- SVG format preferred for scalability

### Icon Sizes
- Small icons: 16x16px, 20x20px
- Medium icons: 24x24px, 32x32px
- Large icons: 48x48px, 64x64px

## 🎬 Video Guidelines

### Formats
- **Web**: MP4 (H.264 codec)
- **Fallback**: WebM for better compression
- **Mobile**: Ensure mobile-friendly encoding

### Specifications
- **Resolution**: 1920x1080 (Full HD) max
- **Frame rate**: 30fps
- **Bitrate**: 2-5 Mbps for web
- **Duration**: Keep under 30 seconds for hero videos

## 📱 Responsive Images

### Implementation Example
```jsx
// In your React components
import heroImage from '../assets/images/hero/hero-main.jpg';
import heroImageMobile from '../assets/images/hero/hero-main-mobile.jpg';

const HeroSection = () => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={heroImageMobile} />
      <img src={heroImage} alt="Hero" />
    </picture>
  );
};
```

### CSS Background Images
```css
.hero-section {
  background-image: url('../assets/images/hero/hero-main.jpg');
}

@media (max-width: 768px) {
  .hero-section {
    background-image: url('../assets/images/hero/hero-main-mobile.jpg');
  }
}
```

## 🎨 Asset Organization Tips

### Naming Convention
- Use kebab-case: `hero-main-image.jpg`
- Be descriptive: `course-javascript-thumbnail.jpg`
- Include size if multiple versions: `logo-small.png`, `logo-large.png`

### Folder Organization
- Group by feature/section
- Keep related assets together
- Use subfolders for different sizes/versions

### Version Control
- Add large assets to `.gitignore` if necessary
- Consider using Git LFS for large files
- Document asset sources and licenses

## 🔧 Asset Loading

### Import in React
```jsx
// Static import
import logo from '../assets/images/logos/company-logo.png';

// Dynamic import
const loadImage = async (imageName) => {
  const image = await import(`../assets/images/${imageName}`);
  return image.default;
};
```

### Public Folder Assets
```jsx
// For assets in public folder
<img src="/images/hero-image.jpg" alt="Hero" />

// With process.env.PUBLIC_URL
<img src={`${process.env.PUBLIC_URL}/images/hero-image.jpg`} alt="Hero" />
```

## 🚀 Performance Optimization

### Lazy Loading
```jsx
import { lazy, Suspense } from 'react';

const LazyImage = lazy(() => import('./LazyImage'));

const Component = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyImage src="large-image.jpg" />
  </Suspense>
);
```

### Image Compression
- Use build-time optimization
- Consider next-gen formats (WebP, AVIF)
- Implement responsive images

### CDN Integration
- Upload assets to CDN (Cloudinary, AWS S3)
- Update asset URLs in components
- Enable caching and optimization

## 📋 Asset Checklist

### Before Adding Assets
- [ ] Optimize file size
- [ ] Check image dimensions
- [ ] Verify format compatibility
- [ ] Test on different devices
- [ ] Add alt text for accessibility

### Quality Check
- [ ] Images are crisp and clear
- [ ] Colors match brand guidelines
- [ ] Consistent style across assets
- [ ] Mobile-friendly sizes
- [ ] Fast loading times

## 🎨 Brand Assets

### Logo Usage
- Use SVG for scalability
- Provide light and dark versions
- Maintain aspect ratio
- Follow brand guidelines

### Color Palette
```css
:root {
  --primary-color: #3B82F6;
  --secondary-color: #10B981;
  --accent-color: #F59E0B;
  --dark-color: #1F2937;
  --light-color: #F9FAFB;
}
```

### Typography Assets
- Include custom fonts if needed
- Optimize font loading
- Provide fallback fonts

## 📞 Asset Resources

### Free Stock Photos
- Unsplash
- Pexels
- Pixabay

### Icon Libraries
- Feather Icons
- Heroicons
- Font Awesome

### Image Optimization Tools
- TinyPNG
- Squoosh
- ImageOptim

### Design Tools
- Figma
- Canva
- Adobe Creative Suite
