import './KanvertarPage.css'

import {useState, useEffect} from 'react'
import axios from 'axios';


function KanvertarPage() {
  const [data, setData] = useState('');

  const getData = () => {
    axios.get('http://127.0.0.1:8000/').then((response) => {
      setData(response.data.data);
    });
  };
  getData();

  return (
    <div>
    kanvertar
    </div>
  );
}

export default KanvertarPage;