import Footer from "../Component/Footer/Footer.jsx"
import Pagination from "../Component/Pagination/Pagination.jsx"
import Recherche from "../Component/Recherche/Recherche.jsx"
import CartesPage from "../Component/Cartes/CartesPage.jsx"
import Actioncard from "../Component/Actioncard/Actioncard.jsx"

const Formations = () => {
    return ( 
     
        <div>
          <Actioncard textaction="Dans quel domaine souhaitez vous vous formez ?"/>
          <Recherche/>
          <CartesPage/>
          <CartesPage/>
          <CartesPage/>
          <div className="flex justify-center flex-col items-center"><Pagination/></div> 
          <Footer/>
        </div>
     
     );
}
 
export default Formations;