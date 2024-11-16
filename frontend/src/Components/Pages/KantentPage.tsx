import './KantentPage.css'

import {useState, useEffect} from 'react'
import axios from 'axios';


function KantentPage() {
  const [data, setData] = useState('');

  const getData = () => {
    axios.get('http://127.0.0.1:8000/').then((response) => {
      setData(response.data.data);
    });
  };
  getData();

  return (
    <div>
    kantent
    </div>
  );
}

export default KantentPage;