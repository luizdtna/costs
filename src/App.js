import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Container from './components/layout/Container';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      
      
        <Navbar></Navbar>


      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer></Footer>
    </Router>

  );
}

export default App;
