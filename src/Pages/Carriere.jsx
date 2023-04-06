import Footer from "../Component/Footer/Footer.jsx"
import Banniere from "../Component/Banniere/Banniere.jsx"
import Pagination from "../Component/Pagination/Pagination.jsx"
import Recherche from "../Component/Recherche/Recherche.jsx"
import Smallcard from "../Component/Smallcard/Smallcard.jsx"
const Carriere = () => {
    return ( 
       <div className="flex justify-center flex-col items-center">
        <Banniere title="Bienvenue sur notre page Carrières !  " text="Nous sommes ravis de partager avec vous nos postes disponibles ainsi que la liste des stages que nous proposons au seins de notre équipe."/>
        <Recherche  text="Qu’elle poste recherchez vous ?"/>
        <Smallcard bgColors="#364DC8" cardtitles="PROFFESSEUR JAVA SCRIPT " cardtexts="Dans le cadre de de notre programme de formation 
nous somme a la recherche d’un développeur java script avec minimum 2 ans d’experience."/>
        <Smallcard bgColors="#5C72E6" cardtitles="PROFFESSEUR JAVA SCRIPT " cardtexts="Dans le cadre de de notre programme de formation 
nous somme a la recherche d’un développeur java script avec minimum 2 ans d’experience."/>
        <Smallcard bgColors="#3250EE"  cardtitles="PROFFESSEUR JAVA SCRIPT " cardtexts="Dans le cadre de de notre programme de formation 
nous somme a la recherche d’un développeur java script avec minimum 2 ans d’experience."/>
        <Pagination/>
        <Footer/>
       </div> 
     );
}
 
export default Carriere;