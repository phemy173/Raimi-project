import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Home from './pages/Home'
import Courses from './pages/Courses'
import Contact from './pages/Contact'






export default function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>


    </div>
  )
}







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
