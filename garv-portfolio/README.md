# Garv Bhardwaj — Portfolio

A modern, interactive portfolio built with **React + Vite**.

## 🚀 How to Run

### Step 1 — Install Node.js
Download from https://nodejs.org (v18 or higher)

### Step 2 — Open in VS Code
```
File → Open Folder → select "garv-portfolio"
```

### Step 3 — Open Terminal in VS Code
```
Terminal → New Terminal   (or Ctrl + `)
```

### Step 4 — Install dependencies
```bash
npm install
```

### Step 5 — Start dev server
```bash
npm run dev
```

### Step 6 — Open in browser
Visit → http://localhost:5173

---

## 📁 Project Structure

```
garv-portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── index.js        ← Edit your skills, projects, certs here
    └── components/
        ├── Cursor.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Skills.jsx      ← Technical Arsenal (animated bars + radar)
        ├── Projects.jsx
        ├── Certifications.jsx
        ├── Contact.jsx
        └── ScrollIndicator.jsx
```

## ✏️ Customizing

- **Skills / Projects / Certs** → edit `src/data/index.js`
- **Colors** → edit CSS variables in `src/index.css`
- **Sections** → each section is its own component in `src/components/`

## 📦 Build for Production

```bash
npm run build
```
Output goes to `dist/` — deploy to Vercel, Netlify, or GitHub Pages.
