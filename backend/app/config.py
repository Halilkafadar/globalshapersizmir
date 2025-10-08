"""
ShapeBot Configuration
Environment variables and settings management
"""
import os
from typing import Optional
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # API Keys
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")
    DEEPINFRA_API_KEY: str = os.getenv("DEEPINFRA_API_KEY", "")
    HF_API_KEY: str = os.getenv("HF_API_KEY", "")
    
    # Redis
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379")
    REDIS_PASSWORD: Optional[str] = os.getenv("REDIS_PASSWORD")
    
    # Vector DB (Pinecone)
    PINECONE_API_KEY: str = os.getenv("PINECONE_API_KEY", "")
    PINECONE_ENVIRONMENT: str = os.getenv("PINECONE_ENVIRONMENT", "")
    PINECONE_INDEX: str = os.getenv("PINECONE_INDEX", "shapebot-knowledge")
    
    # Application Settings
    APP_NAME: str = "ShapeBot"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = os.getenv("DEBUG", "False").lower() == "true"
    
    # CORS Settings
    ALLOWED_ORIGINS: list = [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://yourdomain.com"  # Production domain
    ]
    
    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = 20
    RATE_LIMIT_PER_HOUR: int = 100
    
    # Model Settings
    DEFAULT_MODEL: str = "groq"  # groq, deepinfra, or hf
    PRIMARY_MODEL_TIMEOUT: int = 15  # seconds
    SECONDARY_MODEL_TIMEOUT: int = 10
    FALLBACK_MODEL_TIMEOUT: int = 5
    
    # Token Limits
    MAX_TOKENS_PER_SESSION: int = 2000
    MAX_TOKENS_PER_REQUEST: int = 1024
    
    # Logging
    LOG_LEVEL: str = os.getenv("LOG_LEVEL", "INFO")
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
