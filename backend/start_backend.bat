@echo off
REM ShapeBot Backend Quick Start Script (Windows)

echo ========================================
echo ShapeBot AI Chatbot Backend
echo ========================================
echo.

REM Check if virtual environment exists
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
    echo.
)

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate
echo.

REM Install dependencies
echo Installing dependencies...
pip install -r requirements.txt
echo.

REM Check if .env exists
if not exist ".env" (
    echo ERROR: .env file not found!
    echo Please copy .env.example to .env and add your API keys.
    pause
    exit /b 1
)

echo ========================================
echo Starting ShapeBot Backend Server...
echo ========================================
echo Server will run at: http://localhost:8000
echo API Docs at: http://localhost:8000/docs
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Start the server
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

pause
