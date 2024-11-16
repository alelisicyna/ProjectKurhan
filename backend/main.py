from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.exceptions import HTTPException
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware

from BelarusianConverter.BelarusianConverter import BelarusianConverter



app = FastAPI()

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

BelarusianConverter = BelarusianConverter()


@app.get("/")
async def root():
    lang = "en"
    translate = {
        "be": ["Паведаміць аб памылцы", "Падтрымаць праект", "рэпазыторый", "Не пакідайце ж мовы нашай беларускай, каб ня ўмёрлі", "Ф. Багушэвіч", "гэта праект, мэта якога пашыраць беларускую мову, веды аб ёй і кантэнт па-беларуску", "канвэртаваць тэкст у іншыя беларускія альфабэты", "бібліятэка кантэнту па-беларуску", "Тут магла быць вашая рэкляма", "КАНВЭРТАР", "КАНТЭНТ"],
        "lac": ["Paviedamić ab pamyłcy", "Padtrymać prajekt", "repazytoryj", "Nie pakidajcie ž movy našaj biełaruskaj, kab nia ŭmiorli", "F. Bahuševič", "heta prajekt, meta jakoha pašyrać biełaruskuju movu, viedy ab joj i kantent pa-biełarusku", "kanvertavać tekst u inšyja biełaruskija alfabety", "biblijateka kantentu pa-biełarusku", "Tut mahła być vašaja reklama", "KANVERTAR", "KANTENT"],
        "en": ["Report an error", "Support project", "repository", "Do not leave our language, lest we die", "F. Bogushevich", "this is a project aimed at expanding the Belarusian language, knowledge of it and content in Belarusian", "convert text to other Belarusian alphabets", "the library of Belarusian content", "There could be your ad", "CONVERTER", "CONTENT"]
    }
    return {"data": translate[lang]}


@app.exception_handler(404)
async def not_found_exception_handler(request: Request, exc: HTTPException):
    page_name = "Error404"
    return templates.TemplateResponse("error404.html", {"request": request, "page_name": page_name})


@app.get("/kanvertar/")
async def converter(alphabet: int = 0, text: str = ''):
    page_name = 'Kanvertar'
    text = BelarusianConverter.convert(alphabet, text, True, True, True)
    return {"text": text}


@app.get("/kanvertar/api/")
async def converter_api(alphabet: int = 0, plosive_g: bool = True, assimilation: bool = True, text: str = "тэст"):
    text = BelarusianConverter.convert(alphabet, plosive_g, assimilation, text)
    return {"text": text}
