import './MainPage.css'

import {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from '../Header.tsx'

function MainPage() {
  let lang: string = "be"
  const be: string[] = ["Паведаміць аб памылцы", "Падтрымаць праект", "рэпазыторый", "Не пакідайце ж мовы нашай беларускай, каб ня ўмёрлі", "Ф. Багушэвіч", "гэта праект, мэта якога пашыраць беларускую мову, веды аб ёй і кантэнт па-беларуску", "канвэртаваць тэкст у іншыя беларускія альфабэты", "бібліятэка кантэнту па-беларуску", "Тут магла быць вашая рэкляма", "КАНВЭРТАР", "КАНТЭНТ"];
  const lac: string[] = ["Paviedamić ab pamyłcy", "Padtrymać prajekt", "repazytoryj", "Nie pakidajcie ž movy našaj biełaruskaj, kab nia ŭmiorli", "F. Bahuševič", "heta prajekt, meta jakoha pašyrać biełaruskuju movu, viedy ab joj i kantent pa-biełarusku", "kanvertavać tekst u inšyja biełaruskija alfabety", "biblijateka kantentu pa-biełarusku", "Tut mahła być vašaja reklama", "KANVERTAR", "KANTENT"];
  const en: string[] = ["Report an error", "Support project", "repository", "Do not leave our language, lest we die", "F. Bogushevich", "this is a project aimed at expanding the Belarusian language, knowledge of it and content in Belarusian", "convert text to other Belarusian alphabets", "the library of Belarusian content", "There could be your ad", "CONVERTER", "CONTENT"];
  const translate: string = {"be": be, "lac": lac, "en": en};
  return (
    <div className="main">
      <Header />
      <div className="content">
        <div className="description">
          <strong>ProjectKurhan</strong> - {translate[lang][5]}
        </div>
        <a href="/kanvertar"><div className="kanvertar">{translate[lang][9]}</div></a>
        <a href="/kantent"><div className="kantent">{translate[lang][10]}</div></a><br /><br /><br />
      </div>
    </div>
  );
}

export default MainPage;
