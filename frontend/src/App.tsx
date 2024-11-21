import './App.css'

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage.tsx';
import KanvertarPage from './Components/Pages/KanvertarPage.tsx';
import KantentPage from './Components/Pages/KantentPage.tsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="kanvertar" element={<KanvertarPage />} />
        <Route path="kantent" element={<KantentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
