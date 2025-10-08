@echo off
echo ================================
echo  Global Shapers Izmir Hub
echo  Starting Development Servers...
echo ================================
echo.

:: Kill existing processes
echo [1/4] Cleaning up existing processes...
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM python.exe >nul 2>&1
timeout /t 2 /nobreak >nul

:: Start Backend (FastAPI)
echo [2/4] Starting FastAPI Backend (Port 8000)...
cd backend
start "ShapeBot Backend" cmd /k "python -m uvicorn app.main:app --reload --port 8000"
timeout /t 3 /nobreak >nul
cd ..

:: Start Frontend (Next.js)
echo [3/4] Starting Next.js Frontend (Port 3000)...
start "Global Shapers Frontend" cmd /k "npm run dev"
timeout /t 3 /nobreak >nul

echo [4/4] Done!
echo.
echo ================================
echo  Servers are running:
echo ================================
echo  Frontend:  http://localhost:3000
echo  Backend:   http://localhost:8000/docs
echo  ShapeBot:  Integrated in Frontend
echo ================================
echo.
echo Press any key to stop all servers...
pause >nul

:: Cleanup on exit
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM python.exe >nul 2>&1
echo All servers stopped.
