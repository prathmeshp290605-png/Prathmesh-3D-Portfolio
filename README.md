# Prathmesh Patil — 3D Developer Portfolio

A responsive dark neon portfolio built with React, Vite, and Three.js.

## Run locally (Windows)

1. Install Node.js LTS from https://nodejs.org/ if it is not installed.
2. Extract this ZIP.
3. Open the extracted `Prathmesh-3D-Portfolio` folder in VS Code.
4. In VS Code, open **Terminal → New Terminal**.
5. Run:

```bash
npm install
npm run dev
```

6. Open the local URL printed in the terminal (usually `http://localhost:5173`).

To check a production build:

```bash
npm run build
```

## Personalize before publishing

Edit `src/App.jsx`:
- Update the LinkedIn URL in the social links.
- Confirm the project repository URLs and descriptions are correct.
- Replace `prathmeshp290605@gmail.com` if needed.
- Remove or adjust skills that you have not used yet.

## Deploy to GitHub Pages / Netlify / Vercel

The simplest route for a Vite React site is Vercel or Netlify:
1. Push this folder to a new GitHub repository.
2. Import that repository into Vercel or Netlify.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy and copy the generated public URL.

This is a separate website; the GitHub profile README itself cannot run the Three.js interactive scene.
