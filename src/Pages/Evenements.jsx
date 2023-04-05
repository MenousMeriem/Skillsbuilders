import Footer from "../Component/Footer/Footer.jsx"
import Banniere from "../Component/Banniere/Banniere.jsx"
import Pagination from "../Component/Pagination/Pagination.jsx"
import Recherche from "../Component/Recherche/Recherche.jsx"
import Bigcard from "../Component/Bigcard/Bigcard.jsx"


const Evenements = () => {
    return (
        <div className="flex justify-center flex-col items-center">
        <Banniere title="Bienvenue sur notre page d’ événements !  " text="Nous sommes ravis de partager avec vous les différents
événements que nous avons organisez."/>
        <Recherche />
        <Bigcard bgColor="#FF8A00" cardtitle=" Atelier Création WEB" cardtext="Introduction a la créaction de site web en utilisant HTLL et CSS"/>
        <Bigcard bgColor="#CDD201" cardtitle="Conférences REACT" cardtext="Introduction au framework  REACT a explication de son utilisation pour la réalisation de la partie Frontend"/>
        
        <Pagination/>
        <Footer/>
       </div>  

     );
}
 
export default Evenements;