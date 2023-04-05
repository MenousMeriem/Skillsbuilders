import "./Smallcard.css"
import LOGO from "../../assets/logo.png";
const Smallcard = ({cardtitles, cardtexts, bgColors,bg}) => {
    return ( 
        <div className="cardsmall card-side shadow-xl" style={{backgroundColor: bgColors}}>

       
      
        <div className="textcards" style={{backgroundColor: bg}}>
          <h2 className="cardtitles">{cardtitles}</h2>
          <p className="cardtexts">{cardtexts}</p>
          
        </div>
        
      </div>

     );
}
 
export default Smallcard;