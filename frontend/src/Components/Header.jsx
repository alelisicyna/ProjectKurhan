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
  /*
            <div className="lang">
              <select className="language-select">
                <option>Беларуская (кірыліца)</option>
                <option>Biełaruskaja (łacinka)</option>
                <option>English (US)</option>
              </select>
            </div>
  */
  return (
    <div className="main-header">
      <div className="show-background">
        <Background />
      </div>
      <div className="mobile-background">
        <div className="header">
          <header>
            <div className="fade">
              <div className="links">
                <a className="button-link" target="_blank" href="https://t.me/projectkurhan_bot">{translate[lang][0]}</a>
                <a className="button-link" target="_blank" href="">{translate[lang][1]}</a>
                <a className="button-link" target="_blank" href="https://github.com/alelisicyna/ProjectKurhan">GitHub {translate[lang][2]}</a>
              </div>
              <div className="logo"><a href="/">ProjectKurhan</a></div>
              <img className="quote" src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1000&color=F7F7F7&repeat=false&width=705&height=56&lines=%22%D0%9D%D0%B5+%D0%BF%D0%B0%D0%BA%D1%96%D0%B4%D0%B0%D0%B9%D1%86%D0%B5+%D0%B6+%D0%BC%D0%BE%D0%B2%D1%8B+%D0%BD%D0%B0%D1%88%D0%B0%D0%B9+%D0%B1%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D0%BA%D0%B0%D0%B9%2C+%D0%BA%D0%B0%D0%B1+%D0%BD%D1%8F+%D1%9E%D0%BC%D1%91%D1%80%D0%BB%D1%96!%22+(c)+%D0%A4.+%D0%91%D0%B0%D0%B3%D1%83%D1%88%D1%8D%D0%B2%D1%96%D1%87" alt="Typing SVG" />
              <div className="headerbottom"></div>
            </div>
          </header>
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default Header
