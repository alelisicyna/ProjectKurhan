import './Header.css'

import {useState, useEffect} from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';


function Header() {

  const [data, setData] = useState('');

  const getData = () => {
    axios.get('http://127.0.0.1:8000/').then((response) => {
      setData(response.data.data);
    });
  };
  getData();

  return (
    <div>
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
              <a className="telegram-link" target="_blank" href="https://t.me/thouseeadream">{data[0]}</a>
              <a className="donate-link" target="_blank" href="">{data[1]}</a>
              <a className="repository-link" target="_blank" href="https://github.com/alelisicyna/ProjectKurhan">GitHub {data[2]}</a>
              <a className="github-link" target="_blank" href="https://github.com/alelisicyna"><img className="pfp" src="https://avatars.githubusercontent.com/u/172624754?v=4" /></a>
            </div>
            <br /><br /><br /><br />
            <a className="logo" href="/">ProjectKurhan</a><br />
            <label className="quote"><em>"{data[3]}!"</em> (c) {data[4]}</label>
            <br /><br /><br /><br />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header
