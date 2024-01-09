import {createBrowserRouter, RouterProvider,createRoutesFromElements,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';

function App(){  


  // 2nd way to creates routers-->
  const routes = createRoutesFromElements(
    <>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element = {<About/>}/>
    <Route path="/Items" element = {<Items/>}/>
    
    </>
  );

  const router = createBrowserRouter(routes);


  //1st way to create routers -->
  // const router =createBrowserRouter([
  //   {path: "/", element: <Home/>},
  //   {path: "/about", element: <About1/>},
  //   {path: "/Items", element: <Items/>}
  // ])
  return(
    <>
    <RouterProvider router ={router}/>
    
    </>
  )
}

export default App