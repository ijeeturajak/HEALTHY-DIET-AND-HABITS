@echo off
title THE FOOD FACTOR — Healthy Diet and Habits Keynote
cd /d "%~dp0"
echo ========================================================
echo  THE FOOD FACTOR — HEALTHY DIET & HABITS
echo  Eat Smart. Live Strong. Feel Amazing.
echo  College Classroom Presentation Competition
echo ========================================================
echo.
echo Launching presentation experience...
echo.
start "" http://localhost:5173
npm run dev
pause
