from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.exceptions import HTTPException
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware

from BelarusianConverter.BelarusianConverter import BelarusianConverter



app = FastAPI()
BelarusianConverter = BelarusianConverter()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/v1/kanvertar/get/")
async def kanvertar_get(alphabet: int, text: str, plosive_g: bool = False, assimilation: bool = False, iotation: bool = False):
    text = BelarusianConverter.convert(alphabet, text, plosive_g, assimilation, iotation)
    return {"data": text}


@app.get("/api/v1/kantent/post/")
async def kantent_post():
    return "pam"
