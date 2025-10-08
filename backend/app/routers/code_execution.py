"""
Code Execution Router
Safely execute Python code in a sandboxed environment
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import sys
from io import StringIO
import contextlib
import re

router = APIRouter()

class CodeRequest(BaseModel):
    code: str

class CodeResponse(BaseModel):
    output: str
    error: str | None = None

# Blacklist of dangerous modules and functions
BLACKLIST = [
    'os', 'sys', 'subprocess', 'importlib', '__import__',
    'eval', 'exec', 'compile', 'open', 'file', 'input',
    'raw_input', '__builtins__', 'globals', 'locals',
    'vars', 'dir', 'help', 'reload', 'execfile'
]

def is_safe_code(code: str) -> tuple[bool, str]:
    """Check if code is safe to execute"""
    code_lower = code.lower()
    
    # Check for blacklisted keywords
    for keyword in BLACKLIST:
        pattern = r'\b' + re.escape(keyword) + r'\b'
        if re.search(pattern, code_lower):
            return False, f"Forbidden keyword detected: {keyword}"
    
    # Check for dangerous patterns
    dangerous_patterns = [
        r'__.*__',  # Dunder methods
        r'import\s+os',
        r'import\s+sys',
        r'from\s+os',
        r'from\s+sys',
    ]
    
    for pattern in dangerous_patterns:
        if re.search(pattern, code_lower):
            return False, "Potentially dangerous code pattern detected"
    
    return True, ""

@router.post("/execute-code", response_model=CodeResponse)
async def execute_code(request: CodeRequest):
    """
    Execute Python code in a sandboxed environment
    """
    try:
        # Validate code safety
        is_safe, error_msg = is_safe_code(request.code)
        if not is_safe:
            raise HTTPException(
                status_code=400,
                detail=f"Code validation failed: {error_msg}"
            )
        
        # Limit code length
        if len(request.code) > 10000:
            raise HTTPException(
                status_code=400,
                detail="Code too long (max 10000 characters)"
            )
        
        # Capture stdout
        output_buffer = StringIO()
        
        # Create restricted globals
        restricted_globals = {
            '__builtins__': {
                'print': print,
                'range': range,
                'len': len,
                'str': str,
                'int': int,
                'float': float,
                'list': list,
                'dict': dict,
                'tuple': tuple,
                'set': set,
                'bool': bool,
                'abs': abs,
                'sum': sum,
                'min': min,
                'max': max,
                'sorted': sorted,
                'enumerate': enumerate,
                'zip': zip,
                'map': map,
                'filter': filter,
                'all': all,
                'any': any,
            }
        }
        
        # Execute code with captured output
        with contextlib.redirect_stdout(output_buffer):
            exec(request.code, restricted_globals)
        
        output = output_buffer.getvalue()
        
        return CodeResponse(
            output=output if output else "Code executed successfully (no output)",
            error=None
        )
        
    except SyntaxError as e:
        return CodeResponse(
            output="",
            error=f"Syntax Error: {str(e)}\nLine {e.lineno}: {e.text}"
        )
    except Exception as e:
        return CodeResponse(
            output="",
            error=f"{type(e).__name__}: {str(e)}"
        )
