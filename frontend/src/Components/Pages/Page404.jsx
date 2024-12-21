import './Page404.css'

import {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from '../Header.jsx'

function Page404() {
  return (
    <div>
      <Header />
      <div className="content">
        <h2>Нічога ня знойдзена :/</h2>
      </div>
      <br /><br />
    </div>
  );
}

export default Page404;