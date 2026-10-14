@echo off
echo Netlify portfolio publishing details
echo.
echo Repository remote:
git remote -v
echo.
echo Current branch:
git branch --show-current
echo.
echo Netlify setup:
echo 1. In Netlify, choose Add new site ^> Import an existing project.
echo 2. Connect GitHub and select EmmanuelWole/emmanuelwole.github.io.
echo 3. Choose the master branch. Leave the build command empty.
echo 4. netlify.toml publishes the repository root.
echo.
echo Once linked, pushes to master will trigger a Netlify deploy.

pause