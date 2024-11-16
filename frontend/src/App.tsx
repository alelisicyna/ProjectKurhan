import './App.css'

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage.tsx';
import KanvertarPage from './Components/Pages/KanvertarPage.tsx';
import KantentPage from './Components/Pages/KantentPage.tsx';


function TranslatePage() {
  let { lang } = useParams();
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />}>
          <Route path=":lang" element={<MainPage />} />
        </Route>
        <Route path="kanvertar" element={<KanvertarPage />}>
          <Route path=":lang" element={<KanvertarPage />} />
        </Route>
        <Route path="kantent" element={<KantentPage />}>
          <Route path=":lang" element={<KantentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App
