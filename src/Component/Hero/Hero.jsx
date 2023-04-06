import "./Hero.css"
import image from "../../assets/1.png";

const Hero = () => {
    return (
        
        <div className="cardhero">
            <figure className="imag"><img src={image}/></figure>
            <div className="card-body-hero">
                <h2 className="cardtitle">Skills Builders</h2>
                <p> Bienvenue sur notre plateforme de cours en ligne! 
                    Nous sommes ravis de vous offrir une opportunité 
                    unique d'apprendre depuis n'importe où et à n'importe quel moment. 
                    Bienvenue sur notre plateforme de cours en ligne!  
                    Nous sommes ravis de vous offrir une opportunité </p>
                <div className="cartehero mt-10">
                    <button className="btn btn-primary bg-white text-blue-900 mr-4 hover:text-white"> Ouvrir un compte </button>
                    <button className="btn btn-primary border-white" > En savoir plus </button>
                </div>
            </div> 
        </div>
        
     );
}
 
export default Hero;