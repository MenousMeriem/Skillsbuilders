
// Pages : 
import Navbar from './Component/Navbar/Navbar.jsx';
import Accueil from "./Pages/Accueil.jsx"
import Formations from "./Pages/Formations.jsx"

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Accueil/>}/>
        <Route path='Formations' element={<Formations/>}/>
      </Route>
));
function App() {
  return (
    <div className=''>
      <RouterProvider router={router}/>
      {/* <RouterProvider router={router}/> */}
    </div>
    
  );
}

export default App;



 