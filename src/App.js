import {createBrowserRouter, RouterProvider,createRoutesFromElements,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';
import Navbar from './components/Navbar';
import ItemDetails from './pages/ItemDetails';

function App(){  


  // 2nd way to creates routers-->
  // const routes = createRoutesFromElements(
  //   <Route path="/" element={<Navbar/>} >

  //    {/* <Route path="/" element={<Home/>}/> */}
  //    <Route index element={<Home/>}/>
  //   <Route path="/About" element = {<About/>}/>
  //   <Route path="/Items" element = {<Items/>}/>

  //   </Route>
    
  // );

  // const router = createBrowserRouter(routes);


  //1st way to create routers -->
  // Navigating using Absolute path-->
  //Now the base URL is changed to '/root
  // const router =createBrowserRouter([
  //   {  path: '/root',element: <Navbar/>, children:[
  //     //  {path: "/"(this "/"-> means is absolute path), element: <Home/>},
  //       {index: true, element: <Home/>},
  //      {path: "/root/About", element: <About/>},
  //      {path: "/root/Items", element: <Items/>},

  //     ],
  //    },
    
  // ])


  // Navigating throught relative  path -->
  const router =createBrowserRouter([
    {  path: '/',element: <Navbar/>, children:[
      //  {path: "/"(this "/"-> means is absolute path), element: <Home/>},
        {index: true, element: <Home/>},
       {path: "About", element: <About/>},
       {path: "Items", element: <Items/>},
      //  {path: 'items/item-1',element: <ItemDetails/>}
      {path: 'items/:id',element: <ItemDetails/>}
      // :itemId/id --> is variable name and in roting it is  known as params

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