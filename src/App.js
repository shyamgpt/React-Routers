import {createBrowserRouter, RouterProvider,createRoutesFromElements,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';
import Navbar from './components/Navbar';

function App(){  


  // 2nd way to creates routers-->
  // const routes = createRoutesFromElements(
  //   <>
  //   <Route path="/" element={<Home/>}/>
  //   <Route path="/About" element = {<About/>}/>
  //   <Route path="/Items" element = {<Items/>}/>
    
  //   </>
  // );

  // const router = createBrowserRouter(routes);


  //1st way to create routers -->
  const router =createBrowserRouter([
    {  path: '/',
       element: <Navbar/>,
       children:[
      //  {path: "/", element: <Home/>},
        {index: true, element: <Home/>},
       {path: "/About", element: <About/>},
       {path: "/Items", element: <Items/>},

      ],
     },
    
  ])
  return(
    <>
    <RouterProvider router ={router}/>
    
    </>
  )
}

export default App