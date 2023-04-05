import "./Recherche.css"
const Recherche = ({text}) => {
    return ( 
<div className="cardR w-166 bg-base-100 shadow-xl">
  <div className="card-body">
    <h6 className="texte-recherche">{text}</h6> 
    <input type="text" placeholder="Recherche" className="input input-bordered  w-full max-w-sM" />
    
  </div>
</div>
     );
}
 
export default Recherche;