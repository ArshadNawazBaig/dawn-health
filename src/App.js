import { useEffect, useState } from 'react';
import { Route, Routes, useLoc, useLocation } from 'react-router-dom';
import { Header } from './components/Navbar';
import HomePage from './pages/home';

function App() {
  const params = useLocation();
  const [active, setActive] = useState(params.pathname);
  useEffect(() => {
    setActive(params.pathname);
  }, [params]);
  return (
    <div className="App">
      <Header active={active} setActive={setActive} />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/s" element={<HomePage />}></Route>
        <Route exact path="/f" element={<HomePage />}></Route>
        <Route exact path="/p" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
