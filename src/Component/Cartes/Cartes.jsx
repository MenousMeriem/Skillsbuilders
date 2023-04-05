import FormationCard from '../FormationCard/FormationCard';
// import './Cartes.css'          
import image__one from "../../assets/html.png";
import image__two from "../../assets/css.png";
import image__three from "../../assets/js.png";
import {BsFillArrowRightCircleFill} from "react-icons/bs"

const Cartes = () => {
  return ( 
    <div className="Cartes__carte bg-Carte">
        <div className="flex justify-between w-screen px-16 items-center"> 
            <h1 className='text-6xl mb-10 mt-10'> Nos <br /> formations</h1>
            <BsFillArrowRightCircleFill className='w-16 h-16'/>
        </div>
        <div className="flex justify-around">            
            <FormationCard image={image__one} titre="Formation en HTML" content="Formation complete en HTML."/>
            <FormationCard image={image__two} titre="Formation en CSS" content="Formation complete en CSS."/>
            <FormationCard image={image__three} titre="Formation en JavaScript" content="Formation complete en JavaScript."/>
        </div>
    </div> 
   );
}
 
export default Cartes ;
          
          