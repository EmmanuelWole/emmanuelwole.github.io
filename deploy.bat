@echo off
echo GitHub Pages publishing details
echo.
echo Repository remote:
git remote -v
echo.
echo Current branch:
git branch --show-current
echo.
echo This portfolio is configured for:
echo https://github.com/EmmanuelWole/EmmanuelWole.github.io
echo.
echo Review and commit only the files you intend to publish, then run:
echo git push -u origin master
echo.
echo In GitHub, confirm Settings ^> Pages publishes from the master branch and /(root).

pause