import Footer from "../Component/Footer/Footer.jsx"
import Pagination from "../Component/Pagination/Pagination.jsx"
import Recherche from "../Component/Recherche/Recherche.jsx"
import CartesPage from "../Component/Cartes/CartesPage.jsx"

const Formations = () => {
    return ( 
      //  <div className="flex justify-center flex-col items-center">
        <div>
        <Recherche text=" Dans quel domaine souhaitez-vous vous former ?" />
        <CartesPage/>
        <CartesPage/>
        <CartesPage/>
        <div className="flex justify-center flex-col items-center"><Pagination/></div> 
        <Footer/></div>
      //  </div> 
     );
}
 
export default Formations;