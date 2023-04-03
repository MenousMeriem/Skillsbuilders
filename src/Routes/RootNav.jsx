import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route,
    RouterProvider,
 } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar/>}>
          <Route index='/' element={<Accueil/>}/>
          <Route path='Formations' element={<Formations/>}/>
        </Route>
));

ReactDOM.createRoot(document.getElementById("Navbar")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

