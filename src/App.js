import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import SpDetailContainer from './containers/SpDetailContainer';
import SpecialContainer from './containers/SpecialContainer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/special" element={<SpecialContainer isMain={false} />}/>
        <Route path="/special/:no" element={<SpDetailContainer/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
