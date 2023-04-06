import Footer from "../Component/Footer/Footer.jsx"
import Banniere from "../Component/Banniere/Banniere.jsx"
import Pagination from "../Component/Pagination/Pagination.jsx"
import Recherche from "../Component/Recherche/Recherche.jsx"
import Bigcard from "../Component/Bigcard/Bigcard.jsx"
import Actioncard from "../Component/Actioncard/Actioncard.jsx"
import image_one from "../assets/codage.png"

const Evenements = () => {
    return (
      <div>
        <div>
          <Banniere 
            title="Bienvenue sur notre page d’evénements !" 
            text="Nous sommes ravis de partager avec vous les différents
                    événements que nous avons organisez."/>
          <Actioncard 
            textaction=" A quel événements souhaitez-vous participez ?"/>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="w-full"><Recherche/></div>
          <Bigcard 
            bgColor="#FF8A00" 
            cardtitle=" Atelier Création WEB" 
            cardtext="Introduction a la créaction de site web en utilisant HTLL et CSS"
            image = {image_one}
            />
          <Bigcard
            bgColor="#CDD201" 
            cardtitle="Conférences REACT" 
            cardtext="Introduction au framework  REACT a explication de son utilisation pour la réalisation de la partie Frontend"
            image = {image_one}
            />
          <Pagination/>
          <Footer/>
       </div>  </div>
     );
}
 
export default Evenements;