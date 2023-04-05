import "./Bigcard.css"

const Bigcard = ({cardtitle, cardtext, bgColor}) => {
  return (
    <div className="cardbig card-side shadow-xl" style={{backgroundColor: bgColor}}>
      
      <div className="textcard">
        <h2 className="cardtitle">{cardtitle}</h2>
        <p className="cardtext">{cardtext}</p>
        
      </div>
      
    </div>
  );
}

 
export default Bigcard;