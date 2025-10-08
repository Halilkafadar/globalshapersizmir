"""
ShapeBot Main Application
FastAPI backend for AI chatbot with multi-model routing
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from app.config import settings
from app.routers import chat, code_execution
import logging

# Logging configuration
logging.basicConfig(
    level=settings.LOG_LEVEL,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Create FastAPI app
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="AI Chatbot with Groq, DeepInfra, and Hugging Face models",
    docs_url="/docs" if settings.DEBUG else None,
    redoc_url="/redoc" if settings.DEBUG else None
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# GZip compression
app.add_middleware(GZipMiddleware, minimum_size=1000)

# Include routers
app.include_router(chat.router, prefix="/api/v1", tags=["chat"])
app.include_router(code_execution.router, prefix="/api", tags=["code"])

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "app": settings.APP_NAME,
        "version": settings.APP_VERSION
    }

@app.get("/health")
async def health_check():
    """Detailed health check"""
    return {
        "status": "ok",
        "models": {
            "groq": bool(settings.GROQ_API_KEY),
            "deepinfra": bool(settings.DEEPINFRA_API_KEY),
            "hf": bool(settings.HF_API_KEY)
        },
        "redis": "configured",
        "debug": settings.DEBUG
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.DEBUG
    )
