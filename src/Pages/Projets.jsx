import Footer from "../Component/Footer/Footer.jsx"
import Banniere from "../Component/Banniere/Banniere.jsx"
import Pagination from "../Component/Pagination/Pagination.jsx"
import Bigcard from "../Component/Bigcard/Bigcard.jsx"

const Projets = () => {
    return ( 
       <div className="flex justify-center flex-col items-center">        
        <Banniere title="Bienvenue sur notre page des projets !  " text="Nous sommes ravis de partager avec vous les différents
projets passionnants que nous avons réalisés.Nous avons travaillé dur pour créer des solutions innovantes et répondre aux besoins de nos clients."/>
        <Bigcard bg="#364DC8" bgColor="#364DC8" cardtitle="Bibliothèque en ligne " cardtext="Bienvenue dans notre bibliothèque en ligne! Nous sommes ravis de vous offrir un accès facile à une vaste collection de livres numériques, d'articles de journaux, de magazines, de documents académiques et plus encore."/>
        <Bigcard bg="#36BFC8" bgColor="#36BFC8" cardtitle="Gestion de cabinet " cardtext="Bienvenue dans notre bibliothèque en ligne! Nous sommes ravis de vous offrir un accès facile à une vaste collection de livres numériques, d'articles de journaux, de magazines, de documents académiques et plus encore."/>
        <Bigcard bg="#BADDB7" bgColor="#BADDB7" cardtitle="Agence de voyage" cardtext="Bienvenue dans notre bibliothèque en ligne! Nous sommes ravis de vous offrir un accès facile à une vaste collection de livres numériques, d'articles de journaux, de magazines, de documents académiques et plus encore."/>
        <Pagination/>
        
        <Footer/>
       </div> 
     );
}
 
export default Projets;