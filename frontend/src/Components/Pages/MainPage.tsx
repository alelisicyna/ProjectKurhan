import './MainPage.css'

import {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";


function MainPage() {
  const routeParams = useParams();
  const [data, setData] = useState('');

  const getData = () => {
    axios.get('http://127.0.0.1:8000/').then((response) => {
      setData(response.data.data);
    });
  };
  getData();

  return (
    <div>
      <div className="content">
        <div className="description">
          <strong>ProjectKurhan</strong> - {data[5]}
          <br /><a href="/kanvertar">/kanvertar/</a> - {data[6]}
          <br /><a href="/kantent">/kantent/</a> - {data[7]}
        </div>
        <div className="kanvertar"><a href="/kanvertar">{data[9]}</a></div>
        <div className="kantent"><a href="/kantent">{data[10]}</a></div><br /><br /><br />
        ...<br />{data[8]}...
      </div>
    </div>
  );
}

export default MainPage;
