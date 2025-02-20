import About from "./component/About";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Contact from "./component/Contcat";
import{BrowserRouter,Routes,Route} from "react-router-dom";

function App (){
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
}


export default App;