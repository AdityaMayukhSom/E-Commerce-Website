import '../css/tailwind.min.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Footer from './Footer';

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/Men" element={<Men />}></Route>
                <Route exact path="/Women" element={<Women />}></Route>
                <Route exact path="/About" element={<About />}></Route>
                <Route exact path="/Contact" element={<Contact />}></Route>
                <Route exact path="/Cart" element={<Cart />}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
