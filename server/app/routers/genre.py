from datetime import datetime, timedelta
from fastapi import APIRouter, status, HTTPException, Request
from db.anime import *
from populate import populate_anime

router = APIRouter()


@router.get("/")
async def get_all(request: Request):
    return await get_all_genres()
