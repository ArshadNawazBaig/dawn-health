import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
