# 📘 Tutorial: Deploying React App on Vercel

## 1. **What is Vercel?**

[Vercel](https://vercel.com/) is a cloud platform for hosting web applications and static sites. It’s popular for:

- Easy integration with **React, Next.js, Vue, Angular**, etc.
- Free SSL (HTTPS).
- Automatic deployments from GitHub, GitLab, and Bitbucket.
- Fast global CDN for optimized delivery.

---

## 2. **Pre-requisites**

Before starting:

- Install **Node.js** and **npm/yarn**.
- Have a **React App** ready (created using `create-react-app`, Vite, or other tool).
- A **GitHub/GitLab/Bitbucket account**.
- A **Vercel account** (sign up free at [vercel.com](https://vercel.com/)).

---

## 3. **Build Your React App**

React projects need to be built before deployment.

```bash
# Navigate into project folder
cd my-react-app

# Install dependencies
npm install

# Create optimized production build
npm run build
```

This will create a **`build/`** folder containing static HTML, CSS, and JS files.

---

## 4. **Push Code to GitHub**

If your project is not already in GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/my-react-app.git
git push -u origin main
```

---

## 5. **Deploy to Vercel**

1. **Log in** to [Vercel](https://vercel.com/).
2. Click **New Project**.
3. Choose **Import from GitHub**.
4. Select your React project repository.
5. Configure:

   - **Framework Preset** → _Vite_ .
   - **Build Command** → `npm run build`
   - **Output Directory** → `dist`

6. Click **Deploy** 🚀.

Within a few seconds, Vercel will:

- Build your project.
- Deploy it to a live domain.

---

## 6. **Access Your App**

- After deployment, Vercel gives you a URL like:
  `https://my-react-app.vercel.app`
- Share this URL with anyone.

---

## 7. **Custom Domain (Optional)**

To use your own domain:

1. Go to **Project Settings → Domains**.
2. Add your domain name (e.g., `mywebsite.com`).
3. Update DNS settings in your domain registrar:

   - Add an `A` or `CNAME` record pointing to Vercel.

4. Vercel provides **free SSL certificate** automatically.

---

## 8. **Continuous Deployment**

- Every time you **push changes to GitHub**, Vercel automatically redeploys your app.
- No manual steps needed! 🎉

---

## 9. **Troubleshooting**

- **Blank Page Issue** → Check `"homepage"` field in `package.json` or set `BrowserRouter` with `basename`.
- **Wrong Build Folder** → Ensure Output Directory is set to `build`.
- **Environment Variables** → Add them under **Project Settings → Environment Variables**.

---

✅ Your React App is now live on the internet using **Vercel**!
