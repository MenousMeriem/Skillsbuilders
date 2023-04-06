import Footer from "../Component/Footer/Footer.jsx"
import Banniere from "../Component/Banniere/Banniere.jsx"
import Pagination from "../Component/Pagination/Pagination.jsx"
import Calendar from '../Component/Calendar/Calendar.jsx'
import 'react-calendar/dist/Calendar.css'




const Calendrier = () => {
    return ( 
        <div className="flex justify-center flex-col items-center">
        <Banniere title="Bienvenue sur notre page Calendrier !  " text="Nous sommes ravis de partager avec vous notre Calendrier qui regroupe les dates importantes pour les étudiants, telles que les dates limites d'inscription, les dates de début et de fin des cours, les dates des examens."  />
        <h1 className="text-5xl mb-24 text-blue-900"> Voici notre calendrier d'evènments </h1>
        <Calendar />
        <Pagination/>
        <Footer/>
       </div> 
     );
}
 
export default Calendrier;

