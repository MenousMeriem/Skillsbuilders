import "./Bigcard.css"

const Bigcard = ({cardtitle, cardtext, bgColor, image}) => {
  return (
        <div className="cardbig card-side shadow-xl flex justify-around" style={{backgroundColor: bgColor}}>
          <div className="textcard">
            <h2 className="cardtitle">{cardtitle}</h2>
            <p className="cardtext">{cardtext}</p>      
          </div>
          <div><figure><img className="h-96 ml-4" src={image}></img></figure> </div>
        </div>
      );
}
 
export default Bigcard;