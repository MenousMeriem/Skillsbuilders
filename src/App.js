
// Pages : 
import Navbar from './Component/Navbar/Navbar.jsx';
import Accueil from "./Pages/Accueil.jsx"
import Formations from "./Pages/Formations.jsx"
import Projets from "./Pages/Projets.jsx"
import Carriere from "./Pages/Carriere.jsx"
import Evenements from "./Pages/Evenements.jsx"
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
  RouterProvider,
} from "react-router-dom";
import Calendrier from './Pages/Calendrier.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Accueil/>}/>
        <Route path='Formations' element={<Formations/>}/>
        <Route path='Projets' element={<Projets/>}/>
        <Route path='Carriere' element={<Carriere/>}/>
        <Route path='Evenements' element={<Evenements/>}/>
        <Route path='Calendrier' element={<Calendrier/>}/>
      </Route >
      
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



 