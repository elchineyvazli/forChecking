import { Routes, Route } from "react-router-dom";
import Navbar from './components/Normal/Navbar/Navbar';
import Home from './pages/Home/Home';
import { SliderProvider } from "./useContext/SliderContext";
import "./App.scss";
import './MediaQuery/MediaQuery.scss'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="all">
        <SliderProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </SliderProvider>
      </div>
    </>
  );
}

export default App;
