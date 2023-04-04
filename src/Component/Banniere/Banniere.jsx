import "./Banniere.css"
const Banniere = ({text,title}) => {
    return ( 
        <div className="cardB w-screen">
         <h1 className="title">{title}</h1>
         <h6 className="texte">{text}</h6> 
         
  
        </div>

     );
}
 
export default Banniere ;