import { useEffect, useState } from 'react';
import { Route, Routes, useLoc, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import { Header } from './components/Navbar';
import useScroll from './hooks/useScroll';
import AboutPage from './pages/about';
import Components from './pages/components';
import FaqPage from './pages/faqs';
import HomePage from './pages/home';
import TeamPage from './pages/team';
import { Body } from './styles';

function App() {
  const params = useLocation();
  const { height, width } = useScroll();
  const [active, setActive] = useState(params.pathname);
  console.log(width);
  useEffect(() => {
    setActive(params.pathname);
  }, [params]);
  return (
    <div className="App">
      <Header
        className={`${height > 300 || width < 990 ? 'effix' : ''}`}
        active={active}
        setActive={setActive}
      />
      <Body>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/team" element={<TeamPage />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
          <Route exact path="/faqs" element={<FaqPage />}></Route>
          <Route exact path="/components" element={<Components />}></Route>
        </Routes>
      </Body>
      <Footer />
    </div>
  );
}

export default App;
