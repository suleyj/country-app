import './App.css';
import { Routes, Route} from "react-router-dom";
import Country from './components/Country';
import Header from './components/Header';
import Home from './components/Home';
import { ThemeProvider } from './context/ThemeContext';
function App() {
  return (
    <div className="App">
    <ThemeProvider>
        <Header/>
        <Routes>
          <Route path="/country-app" element={<Home/>} />
          <Route path="/country-app/Country/:name" element={<Country/>} />
        </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
