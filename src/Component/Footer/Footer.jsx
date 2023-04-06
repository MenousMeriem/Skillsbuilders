import "./Footer.css"
import image from "../../assets/LogoFooter.PNG"

const Footer = () => {
    return ( 
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <figure className="imageFooter"><img src={image} alt="Logo"/></figure>
            <h1>SKILLS BUILDERS</h1>
          </div> 
          <div>
            <span className="footer-title">SKILLS BUILDERS</span> 
            <a className="link link-hover">Acceuil</a> 
            <a className="link link-hover">Formations</a> 
            <a className="link link-hover">Nos Projets</a> 
            <a className="link link-hover">Carrières</a>
          </div> 
          <div>
            <span className="footer-title">CARRIERE</span> 
            <a className="link link-hover">Nous Rejoindre</a> 
            <a className="link link-hover">Recrutements</a> 
            <a className="link link-hover">Stages</a>   
          </div> 
          <div>
            <span className="footer-title">Informations</span> 
            <a className="link link-hover">FAQ</a> 
            <a className="link link-hover">Calendrier</a> 
            <a className="link link-hover">Méntion Légales</a>
          </div>
          <div>
            <span className="footer-title">Newsletter</span> 
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Entrez Votre Adresse Mail</span>
              </label> 
              <div className="relative">
                <input type="text" placeholder="nom@site.com" className="input input-bordered w-full pr-16" /> 
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">S'inscrire</button>
              </div>
            </div>
          </div> 
      
        </footer>
     );
}
 
export default Footer;