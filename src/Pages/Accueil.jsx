
import Hero from "../Component/Hero/Hero.jsx";
import Cartes from "../Component/Cartes/Cartes.jsx"
import Footer from "../Component/Footer/Footer.jsx"
import Carteprojet from "../Component/Carte-projet/Carteprojet.jsx";
import CarteEvent from "../Component/Carte-event/CarteEvent.jsx";



export default function Accueil() {

    return (
        <div className="">
            <Hero/>
            <Cartes/>
            <Carteprojet/>
            <CarteEvent/>
            <Footer/>
            
        </div>
    )
}