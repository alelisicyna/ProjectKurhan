import './KanvertarPage.css'

import {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import Header from '../Header.jsx'

function KanvertarPage() {
  const [textFromTextarea, setTextFromTextarea] = useState('');
  const handleChange = (event) => {
    setTextFromTextarea(event.target.value)
  };


  const [text, setText] = useState('');
  let mytext = '';
  const getText = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/kanvertar/?alphabet=2&text=${textFromTextarea}`).then((response) => {
      setText(response.data.data)
    })
  }

  let right = '->'

  // <option value="5">Арабіца // اَرَبِࢯَ</option>

  return (
    <div>
      <Header />
      <div className="content">
        <br /><br /><a href="" id="logo"><h1>КАНВЭРТАР</h1></a>
        <p>беларускіх тэкстаў у іншыя альфабэты</p>
        <br /><br /><br /><br />
        <select>
          <option value="0" selected>Mużyckaja Prauda (K. Kalinoŭski)</option>
          <option value="1">Łacinka1929 (B. Taraškievič)</option>
          <option value="2">Łacinka1962 (Ja. Stankievič)</option>
          <option value="3">Lacinka2000 (AAN)</option>
          <option value="4">Transliteracyja2023</option>
        </select><br />
        <div className="settings">
          <label>Выбухная Ґ [H {right} G]<input type="checkbox" id="g" name="g" value="True" /></label><br />
          <label>Мяккая асыміляцыя зычных [SCZ {right} ŚĆŹ]<input type="checkbox" id="assimilation" name="assimilation" value="True" /></label><br />
          <label>Ётацыя І [I {right} J/IJ]<input type="checkbox" id="iotation" name="iotation" value="True" /></label><br />
        </div>
        <textarea value={textFromTextarea} onChange={handleChange} type="text" name="text" className="textfield" placeholder="Тэкст" />
        <div className="result">
          <a id="result">{text}</a>
        </div>
        <button type="submit" value="Submit" className="convert" onClick={() => getText()}>КАНВЭРТАВАЦЬ</button><br />
        <button type="submit" value="Submit" className="copy">КАПІЯВАЦЬ</button>
      </div>
    </div>
  );
};

export default KanvertarPage;