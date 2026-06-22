@echo off
cd /d "%~dp0"
echo Starting the website development server...
start /b cmd /c "timeout /t 4 /nobreak >nul && start "" http://localhost:3000"
npm run dev
