# cequannettles.com

# Cequan Nettles IT Portfolio

This is the portfolio website for Cequan Nettles, IT Wizard Extraordinaire. This immersive 3D experience showcases my expertise in system administration, network security, cloud infrastructure, and technical support. Thanks for taking the time to check this out. If you have any questions or comments, feel free to reach out via LinkedIn at <a href="https://www.linkedin.com/in/c-nettles01/"><samp>linkedin.com/in/c-nettles01</samp></a>.

<br>

To setup a dev environment:

```bash
# Clone the repository

# Install dependencies 
npm i

# Run the local dev server
npm run dev
```

To serve a production build:

```bash
# Install dependencies if not already done - 'npi i'

# Build for production
npm run build

# Serve the build using express
npm start
```

## GitHub Pages Deployment

This website is automatically deployed to GitHub Pages on every push to the `master` branch. The deployment workflow:

1. Builds the project using `npm run build`
2. Uploads the `public/` directory as a GitHub Pages artifact
3. Deploys to GitHub Pages

The live site will be available at: `https://qtechdevelopment.github.io/portfolio-website/`

To manually trigger a deployment, go to the Actions tab in the GitHub repository and run the "Deploy to GitHub Pages" workflow.
