import './App.css'

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage.jsx';
import KanvertarPage from './Components/Pages/KanvertarPage.jsx';
import KantentPage from './Components/Pages/KantentPage.jsx';
import Page404 from './Components/Pages/Page404.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<MainPage />} />
        <Route path="kanvertar" element={<KanvertarPage />} />
        <Route path="kantent" element={<KantentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
