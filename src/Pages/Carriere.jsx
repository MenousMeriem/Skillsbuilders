import Footer from "../Component/Footer/Footer.jsx"
import Banniere from "../Component/Banniere/Banniere.jsx"
import Pagination from "../Component/Pagination/Pagination.jsx"
const Carriere = () => {
    return ( 
       <div className="flex justify-center flex-col items-center">
        <Banniere title="Bienvenue sur notre page Carrières !  " text="Nous sommes ravis de partager avec vous nos postes disponibles ainsi que la liste des stages que nous proposons au seins de notre équipe."/>
        <Pagination/>
        <Footer/>
       </div> 
     );
}
 
export default Carriere;