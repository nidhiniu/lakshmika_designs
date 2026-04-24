# Lakshmika Designs — Complete Setup & Hosting Guide

---

## What you're building

A professional React website hosted **free on Netlify**.  
**Only cost = domain name** (~₹800–1200/year on GoDaddy / Namecheap / Google Domains).

**Tech stack:**
- React + Vite (fast, modern)
- Tailwind CSS (clean styling)
- Netlify (free hosting, auto-deploy from GitHub)
- GitHub (stores your code, triggers auto-deploys on every change)

---

## PART 1 — One-time Setup on Your Computer

### Step 1 — Install Node.js

1. Go to https://nodejs.org
2. Download the **LTS version** (green button)
3. Install it (just click Next → Next → Install)
4. To verify, open **Terminal** (Mac) or **Command Prompt** (Windows) and type:
   ```
   node --version
   ```
   You should see something like `v20.x.x` ✅

---

### Step 2 — Install VS Code (code editor)

1. Go to https://code.visualstudio.com
2. Download and install it
3. This is where you'll edit text and images in future

---

### Step 3 — Copy the project folder to your computer

Take the **`lakshmika-designs`** folder you received and place it somewhere easy to find.  
Example: `Documents/lakshmika-designs`

---

### Step 4 — Install project dependencies

Open **Terminal** / **Command Prompt**, then:

```bash
# Navigate into the project folder
cd Documents/lakshmika-designs

# Install all packages (only needed once)
npm install
```

Wait for it to finish (about 1–2 minutes).

---

### Step 5 — Run locally to preview

```bash
npm run dev
```

Open your browser and go to: **http://localhost:5173**  
You should see the full website! ✅

Press `Ctrl + C` in terminal to stop the preview server.

---

## PART 2 — Push to GitHub (for free hosting)

### Step 6 — Create a GitHub account

1. Go to https://github.com
2. Sign up with your email (free account is enough)

---

### Step 7 — Create a new repository

1. After logging in, click the **"+"** button → **New repository**
2. Repository name: `lakshmika-designs`
3. Keep it **Public** (required for free Netlify)
4. Do NOT check "Add README" (you already have code)
5. Click **Create repository**

---

### Step 8 — Push your code to GitHub

In your terminal (inside the project folder):

```bash
git init
git add .
git commit -m "Initial website launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lakshmika-designs.git
git push -u origin main
```

*(Replace `YOUR_USERNAME` with your actual GitHub username)*

Refresh your GitHub page — you should see all the files! ✅

---

## PART 3 — Deploy to Netlify (Free Hosting)

### Step 9 — Create a Netlify account

1. Go to https://netlify.com
2. Click **Sign up** → choose **Sign up with GitHub**
3. Authorize Netlify

---

### Step 10 — Connect your GitHub repository

1. In Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
2. Click **GitHub**
3. Search for `lakshmika-designs` and select it
4. Build settings will be auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **"Deploy site"**

Wait 1–2 minutes. Netlify gives you a URL like:  
`https://lakshmika-designs-abc123.netlify.app` ✅

**Your website is now LIVE!** 🎉

---

## PART 4 — Connect Your Custom Domain

### Step 11 — Buy a domain

Recommended registrars (cheapest for .in domain):
- **GoDaddy**: https://godaddy.com — search `lakshmika.in` or `lakshmikajewels.in`
- **Namecheap**: https://namecheap.com
- **BigRock**: https://bigrock.in (good for .in domains)

Estimated cost: ₹800–1200/year for `.in` domain.

---

### Step 12 — Add domain to Netlify

1. In your Netlify site → **Domain settings** → **Add custom domain**
2. Enter your domain (e.g., `lakshmika.in`)
3. Netlify will show you **DNS records** to add

---

### Step 13 — Point domain to Netlify

In your domain registrar's DNS settings, add these records:

| Type  | Name | Value                        |
|-------|------|------------------------------|
| A     | @    | 75.2.60.5                    |
| CNAME | www  | your-site.netlify.app        |

*(Netlify will show you the exact values — use those)*

Wait 10–30 minutes for DNS to propagate.

---

### Step 14 — Enable free HTTPS (SSL)

In Netlify → Domain settings → **HTTPS** → click **"Verify DNS configuration"**  
Then click **"Provision certificate"**

Your site will now have `https://` — the green padlock! ✅

---

## PART 5 — How to Update Photos in Future

### Method A: Quick photo update (Recommended for your sister)

**This is the easiest method — no coding knowledge needed.**

**Step 1:** Upload your new photo to **Google Drive** and make it public:
- Right click photo → Share → "Anyone with the link" → Copy link
- Change the link format:
  - From: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
  - To: `https://drive.google.com/uc?export=view&id=FILE_ID`

**Step 2:** Open VS Code → open the file:  
`src/data/siteContent.js`

**Step 3:** Find the image URL you want to replace, paste the new Google Drive URL.

**Step 4:** Save the file (`Ctrl + S`).

**Step 5:** In terminal:
```bash
git add .
git commit -m "Updated collection photos"
git push
```

**Netlify automatically detects the push and redeploys in ~60 seconds.** ✅

---

### Method B: Using Cloudinary (Best for many photos)

Cloudinary has a **free plan** (25GB storage, 25GB bandwidth/month — more than enough).

1. Sign up at https://cloudinary.com (free)
2. Upload photos through their nice dashboard
3. Copy the URL they provide
4. Paste in `siteContent.js` and push

**Why Cloudinary is better:**
- Auto-compresses images (website loads faster)
- Gives you a CDN (loads fast anywhere in India)
- Easy dashboard to manage all photos

---

### What can be updated in `siteContent.js`

Everything important is in **one file**: `src/data/siteContent.js`

| What to change             | Variable to edit         |
|---------------------------|--------------------------|
| WhatsApp number           | `brand.whatsappNumber`   |
| Instagram handle          | `brand.instagramHandle`  |
| Hero background photo     | `hero.backgroundImage`   |
| Collection photos         | `collections[].image`    |
| Collection titles/labels  | `collections[].title`    |
| Brand story text          | `story.body`             |
| Brand story photo         | `story.image`            |
| Customer reviews          | `testimonials[]`         |
| Footer links              | `footer.navigation`      |

---

## PART 6 — Ongoing Workflow (After Launch)

Every time you want to update the website:

```bash
# 1. Make your changes in VS Code
# 2. Open terminal in the project folder
git add .
git commit -m "Describe what you changed"
git push
```

**That's it.** Netlify auto-deploys in about 60 seconds. ✅

---

## Summary: Total Monthly Cost

| Item              | Cost           |
|-------------------|----------------|
| Netlify hosting   | ₹0 (Free)      |
| GitHub            | ₹0 (Free)      |
| Cloudinary images | ₹0 (Free tier) |
| Domain (.in/year) | ~₹900–1200/yr  |
| **TOTAL/month**   | **~₹75–100**   |

---

## Folder Structure Reference

```
lakshmika-designs/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Top navigation bar
│   │   ├── Hero.jsx         ← Full-screen hero section
│   │   ├── Collections.jsx  ← 3 collection cards
│   │   ├── Story.jsx        ← Brand story section
│   │   ├── Testimonials.jsx ← Customer reviews
│   │   ├── Contact.jsx      ← WhatsApp / Instagram CTA
│   │   └── Footer.jsx       ← Bottom footer
│   ├── data/
│   │   └── siteContent.js   ← ⭐ ALL PHOTOS & TEXT HERE
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── netlify.toml             ← Tells Netlify how to build
└── .gitignore
```

---

## Troubleshooting

**`npm install` fails?**  
→ Make sure Node.js is installed: `node --version`

**Site not updating after `git push`?**  
→ Check Netlify dashboard → Deploys tab for any error messages

**Images not showing?**  
→ Make sure the image URL is publicly accessible (open it in a browser tab first)

**Custom domain not working?**  
→ DNS changes take up to 48 hours. Wait and check again.

---

## Quick Commands Cheat Sheet

```bash
npm install          # Install packages (only once)
npm run dev          # Preview site locally
npm run build        # Build for production
git add .            # Stage all changes
git commit -m "msg"  # Save changes with a message
git push             # Send to GitHub (triggers Netlify deploy)
```

---

*Guide prepared for Lakshmika Designs — 2024*
