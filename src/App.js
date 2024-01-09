import { useState} from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Items from "./pages/Item";


function App() {
  const [page, setPage] = useState("Home");
  return (
    <>
    <Navbar setPage = {setPage}/>
    {page === "home" && <Home/>}
    {page === "About" && <About/>}
    {page === "items" && <Items/>}
    </>
  );
}

export default App;
