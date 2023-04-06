import "./Smallcard.css"
import LOGO from "../../assets/logo.png";
const Smallcard = ({cardtitles, cardtexts, bgColors,bg}) => {
    return ( 

        <div className="cardsmall card-side shadow-xl flex justify-around" style={{backgroundColor: bgColors}}>
          <div className="textcards" style={{backgroundColor: bg}}>
            <h2 className="cardtitles">{cardtitles}</h2>
            <p className="cardtexts">{cardtexts}</p> 
          </div>
          <div>
            <figure><img src={LOGO} className="mt-14" ></img></figure>
          </div>
      </div>

     );
}
 
export default Smallcard;