import '../index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Introduction from './Introduction';
import Navbar from './Navbar';
import Blogs from './Blogs';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;