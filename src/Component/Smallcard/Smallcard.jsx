import "./Smallcard.css"

const Smallcard = ({cardtitles, cardtexts, bgColors}) => {
    return ( 
        <div className="cardsmall card-side shadow-xl" style={{backgroundColor: bgColors}}>
      
        <div className="textcards">
          <h2 className="cardtitles">{cardtitles}</h2>
          <p className="cardtexts">{cardtexts}</p>
          
        </div>
        
      </div>

     );
}
 
export default Smallcard;