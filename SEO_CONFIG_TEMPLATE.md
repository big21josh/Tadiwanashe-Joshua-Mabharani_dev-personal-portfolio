# SEO Configuration Template

## 🔧 Quick Update Guide

Copy this template and update your actual values. Then replace the placeholders in the project files.

### Your Information
```
Domain: ___________________________________
OG Image Path: ___________________________________
Twitter Handle: ___________________________________
LinkedIn Profile: ___________________________________
GitHub Profile: ___________________________________
Email: ___________________________________
Phone (optional): ___________________________________
City/Location: ___________________________________
Country: ___________________________________
```

### Social Profiles
```
GitHub: https://github.com/big21josh
Twitter: https://twitter.com/[YOUR_HANDLE]
LinkedIn: https://linkedin.com/in/[YOUR_PROFILE]
Portfolio: https://[YOUR_DOMAIN]
```

---

## 📋 Files to Update

### 1. `index.html` - Meta Tags

#### Find and Replace (3 instances):
```
FIND:     https://tadiwanashe-joshua.dev
REPLACE:  [YOUR DOMAIN]
```

#### Find and Replace (2 instances):
```
FIND:     og-image.jpg
REPLACE:  [YOUR OG IMAGE PATH]
```

#### Update Social Links in JSON-LD (lines 48-51):
```json
"sameAs": [
  "https://github.com/big21josh",
  "https://twitter.com/[YOUR_TWITTER_HANDLE]",
  "https://linkedin.com/in/[YOUR_LINKEDIN]"
]
```

### 2. `public/sitemap.xml` - Domain URL

#### Find and Replace (7 instances):
```
FIND:     https://tadiwanashe-joshua.dev
REPLACE:  [YOUR DOMAIN]
```

### 3. `public/robots.txt` - Sitemap URL

#### Find and Replace (1 instance):
```
FIND:     https://tadiwanashe-joshua.dev/sitemap.xml
REPLACE:  [YOUR DOMAIN]/sitemap.xml
```

---

## 🖼️ Creating Your OG Image

### Specifications
- **Dimensions**: 1200 x 630 pixels
- **File Format**: JPG or PNG
- **File Size**: < 200 KB recommended
- **Location**: `public/og-image.jpg`

### Design Tips
1. Include your name prominently
2. Add key skills/tagline
3. Use brand colors (purple, cyan)
4. Keep text readable at small sizes
5. Add your logo if you have one

### Tools to Create
- [Canva](https://canva.com) - Easy templates
- [Figma](https://figma.com) - Professional design
- [Adobe Express](https://express.adobe.com) - Quick creation
- [Photopea](https://photopea.com) - Free Photoshop alternative

### Recommended Content
```
[Your Photo/Avatar] [Your Name]
Software Engineer & Product Designer

Based in [City], [Country]
```

---

## 📊 Google Analytics 4 Setup

### Step 1: Create Property
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Create Property"
3. Enter your domain name
4. Complete setup wizard

### Step 2: Get Measurement ID
- Copy your Measurement ID (format: G-XXXXXXXXXX)

### Step 3: Add to Your Site
In `index.html` before `</head>`, add:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Measurement ID.

---

## 🔍 Google Search Console Setup

### Step 1: Verify Domain
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Choose verification method (recommended: HTML tag)

### Step 2: Submit Sitemap
1. In left menu, click "Sitemaps"
2. Click "Add/test sitemap"
3. Enter: `sitemap.xml`
4. Click "Submit"

### Step 3: Request Indexing
1. Go to "URL Inspection" tool
2. Enter your domain homepage
3. Click "Request indexing"

### Step 4: Monitor Performance
- Check "Performance" tab regularly
- Monitor search queries, clicks, impressions
- Watch for crawl errors

---

## 🚀 Deployment Checklist

Before deploying, verify:

- [ ] Updated domain URLs in index.html
- [ ] Updated social profiles in JSON-LD
- [ ] Created og-image.jpg (1200x630px)
- [ ] Placed og-image.jpg in public/ folder
- [ ] Updated sitemap.xml domain URLs
- [ ] Updated robots.txt sitemap URL
- [ ] Added Google Analytics code
- [ ] Tested all external links
- [ ] Verified all images have alt text
- [ ] Ran npm build successfully
- [ ] No console errors in production build

---

## 🧪 Testing Commands

### Local Testing
```bash
# Build the project
npm run build

# Preview production build
npm run preview

# Check for linting issues
npm lint
```

### SEO Validation
1. **Chrome Lighthouse**: F12 → Lighthouse tab
2. **PageSpeed Insights**: https://pagespeed.web.dev/
3. **Schema Validator**: https://validator.schema.org/
4. **OG Preview**: https://developers.facebook.com/tools/debug/

---

## 📱 Mobile Optimization Checklist

- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Check text readability
- [ ] Verify touch targets (min 44x44px)
- [ ] Test form inputs
- [ ] Check image loading speed
- [ ] Verify navigation accessibility
- [ ] Test with slow 4G (DevTools → Network)

---

## ⚡ Performance Targets

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms  
- **CLS** (Cumulative Layout Shift): < 0.1

### Lighthouse Scores
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: 100

### File Size Goals
- Bundle size: < 150 KB
- HTML: < 50 KB
- CSS: < 30 KB
- JS: < 100 KB
- Images: < 1 MB total

---

## 📞 After Deployment Tasks

### Day 1
- [ ] Verify site loads correctly
- [ ] Check all links working
- [ ] Test forms if applicable
- [ ] Verify OG image appears in sharing test

### Week 1
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Submit to other search engines (Yandex, etc.)
- [ ] Share on social media
- [ ] Check Google Analytics data flowing

### Month 1
- [ ] Review search console performance
- [ ] Check indexation status
- [ ] Monitor traffic in Analytics
- [ ] Fix any crawl errors
- [ ] Optimize based on performance data

---

## 🔐 Security & SEO

### HTTPS
- Ensure site runs on HTTPS only
- Enable HSTS header

### Security Headers (for .htaccess)
```apache
# Add to .htaccess
Header set X-Frame-Options "SAMEORIGIN"
Header set X-Content-Type-Options "nosniff"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
```

### CSP (Content Security Policy)
```html
<!-- Add to index.html <head> -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline';">
```

---

## 📚 Quick Reference Links

### Search Engines
- [Google](https://www.google.com/)
- [Bing](https://www.bing.com/)
- [DuckDuckGo](https://duckduckgo.com/)

### Webmaster Tools
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### SEO Tools
- [Moz Pro](https://moz.com/products/pro)
- [SEMrush](https://www.semrush.com/)
- [Ahrefs](https://ahrefs.com/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Validation Tools
- [Schema.org Validator](https://validator.schema.org/)
- [Facebook OG Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [W3C Validator](https://validator.w3.org/)

### Content Tools
- [Grammarly](https://www.grammarly.com/) - Writing assistance
- [Hemingway Editor](http://www.hemingwayapp.com/) - Readability
- [Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) - Keyword research

---

## 📞 Need Help?

### Common Issues

**OG Image not showing:**
- Verify image path is correct
- Check image exists and is accessible
- Image must be 1200x630px
- Use absolute URL (not relative)

**Sitemap not submitted:**
- Ensure sitemap.xml is valid XML
- Check domain in sitemap matches actual domain
- Verify robots.txt points to sitemap correctly

**Analytics not tracking:**
- Verify Measurement ID is correct
- Check Google Analytics script is in <head>
- Clear browser cache
- Wait 24 hours for data to appear

**Low SEO scores:**
- Add more descriptive alt text
- Improve heading hierarchy
- Optimize image sizes
- Add more content

---

**Template Created**: August 18, 2026
**Status**: Ready for Configuration
**Next Step**: Fill out your information and update files accordingly
