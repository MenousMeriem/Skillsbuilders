import Footer from "../Component/Footer/Footer.jsx"
import Banniere from "../Component/Banniere/Banniere.jsx"
import Pagination from "../Component/Pagination/Pagination.jsx"
const Projets = () => {
    return ( 
       <div className="flex justify-center flex-col items-center">        
        <Banniere title="Bienvenue sur notre page des projets !  " text="Nous sommes ravis de partager avec vous les différents
projets passionnants que nous avons réalisés.Nous avons travaillé dur pour créer des solutions innovantes et répondre aux besoins de nos clients."/>
        <Pagination/>
        <Footer/>
       </div> 
     );
}
 
export default Projets;