import './Header.css'

import {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

import Background from "./Background";



function Header() {
  let lang = "be"
  const be = ["Паведаміць аб памылцы", "Падтрымаць праект", "рэпазыторый", "Не пакідайце ж мовы нашай беларускай, каб ня ўмёрлі", "Ф. Багушэвіч", "гэта праект, мэта якога пашыраць беларускую мову, веды аб ёй і кантэнт па-беларуску", "канвэртаваць тэкст у іншыя беларускія альфабэты", "бібліятэка кантэнту па-беларуску", "Тут магла быць вашая рэкляма", "КАНВЭРТАР", "КАНТЭНТ"];
  const lac = ["Paviedamić ab pamyłcy", "Padtrymać prajekt", "repazytoryj", "Nie pakidajcie ž movy našaj biełaruskaj, kab nia ŭmiorli", "F. Bahuševič", "heta prajekt, meta jakoha pašyrać biełaruskuju movu, viedy ab joj i kantent pa-biełarusku", "kanvertavać tekst u inšyja biełaruskija alfabety", "biblijateka kantentu pa-biełarusku", "Tut mahła być vašaja reklama", "KANVERTAR", "KANTENT"];
  const en = ["Report an error", "Support project", "repository", "Do not leave our language, lest we die", "F. Bogushevich", "this is a project aimed at expanding the Belarusian language, knowledge of it and content in Belarusian", "convert text to other Belarusian alphabets", "the library of Belarusian content", "There could be your ad", "CONVERTER", "CONTENT"];
  const translate = {"be": be, "lac": lac, "en": en};
  return (
    <div className="main-header">
      <Background />
      <div className="header">
        <header>
          <div>
            <div className="lang">
            <select className="language-select">
              <option>Беларуская (кірыліца)</option>
              <option>Biełaruskaja (łacinka)</option>
              <option>English (US)</option>
            </select>
            </div>
            <div className="links">
              <a className="telegram-link" target="_blank" href="https://t.me/projectkurhan_bot">{translate[lang][0]}</a>
              <a className="donate-link" target="_blank" href="">{translate[lang][1]}</a>
              <a className="repository-link" target="_blank" href="https://github.com/alelisicyna/ProjectKurhan">GitHub {translate[lang][2]}</a>
              <a className="github-link" target="_blank" href="https://github.com/alelisicyna"><img className="pfp" src="https://avatars.githubusercontent.com/u/172624754?v=4" /></a>
            </div>
            <div className="logo"><a href="/">ProjectKurhan</a></div>
            <label className="quote"><em>"{translate[lang][3]}!"</em> (c) {translate[lang][4]}</label><br />
            <div className="headerbottom"></div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header
