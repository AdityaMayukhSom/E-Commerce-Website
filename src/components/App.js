import '../css/tailwind.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Footer from './Footer';
import LogIn from './LogIn.js';
import SignUp from './SignUp.js';

function App() {
    return (
        <div className="App bg-[#222222] text-[#de993f]">
            <Routes>
                <Route exact path="/" element={[<Navbar key="nav" />, <Home key="home" />, <Footer key="footer" />]}></Route>
                <Route exact path="/Men" element={[<Navbar key="nav" />, <Men key="men" />, <Footer key="footer" />]}></Route>
                <Route exact path="/Women" element={[<Navbar key="nav" />, <Women key="women" />, <Footer key="footer" />]}></Route>
                <Route exact path="/About" element={[<Navbar key="nav" />, <About key="about" />, <Footer key="footer" />]}></Route>
                <Route exact path="/Contact" element={[<Navbar key="nav" />, <Contact key="contact" />, <Footer key="footer" />]}></Route>
                <Route exact path="/Cart" element={[<Navbar key="nav" />, <Cart key="cart" />, <Footer key="footer" />]}></Route>
                <Route exact path="/LogIn" element={<LogIn />}></Route>
                <Route exact path="/SignUp" element={<SignUp />}></Route>
            </Routes>
        </div>
    );
}

export default App;
