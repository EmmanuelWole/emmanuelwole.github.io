@echo off
echo Deploying Portfolio to GitHub Pages...
echo.

REM Initialize git repository if not already done
if not exist .git (
    git init
    git add .
    git commit -m "Initial commit"
)

REM Add all changes
git add .

REM Commit changes
git commit -m "Update portfolio with optimizations"

REM Deploy to GitHub Pages (replace 'yourusername' with your actual GitHub username)
echo.
echo To deploy to GitHub Pages:
echo 1. Create a new repository on GitHub named 'yourusername.github.io'
echo 2. Run: git remote add origin https://github.com/yourusername/yourusername.github.io.git
echo 3. Run: git push -u origin main
echo.
echo Or if using a project repository:
echo 1. Create a new repository on GitHub
echo 2. Run: git remote add origin https://github.com/yourusername/portfolio.git
echo 3. Run: git push -u origin main
echo 4. Enable GitHub Pages in repository settings

pause