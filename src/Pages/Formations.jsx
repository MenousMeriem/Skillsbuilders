import Footer from "../Component/Footer/Footer.jsx"
import Pagination from "../Component/Pagination/Pagination.jsx"
import Recherche from "../Component/Recherche/Recherche.jsx"
import Actioncard from "../Component/Actioncard/Actioncard.jsx"

const Formations = () => {
    return ( 
       <div className="flex justify-center flex-col items-center">
        
        <Actioncard textaction="Dans quel domaine souhaitez-vous vous former ?"/>
        <Recherche />
        <Pagination/>
        <Footer/>
       </div> 
     );
}
 
export default Formations;