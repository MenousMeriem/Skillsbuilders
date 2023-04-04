import Footer from "../Component/Footer/Footer.jsx"
import Banniere from "../Component/Banniere/Banniere.jsx"
import Pagination from "../Component/Pagination/Pagination.jsx"
const Evenements = () => {
    return (
        <div className="flex justify-center flex-col items-center">
        <Banniere title="Bienvenue sur notre page d’ événements !  " text="Nous sommes ravis de partager avec vous les différents
événements que nous avons organisez."/>
        <Pagination/>
        <Footer/>
       </div>  

     );
}
 
export default Evenements;