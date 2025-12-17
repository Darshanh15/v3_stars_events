// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Explore from './pages/Booking/Book/Explore';
import EventDetails from './pages/Booking/Book/EventDetails';
import Career from './pages/Career/Career';
import Achievements from './pages/Achievements/Achievements';
import Achievement from './pages/Achievements/Achievement';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/career" element={<Career />} />
        <Route path="/achievement" element={<Achievement />} />
        {/* <Route path="/Service" element={<Service />} /> */}
      </Routes>
      <Footer />
      </>
  );
}

export default App;
