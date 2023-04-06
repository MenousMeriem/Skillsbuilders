import "./Actioncard.css"
const Actioncard = ({textaction}) => {
    return ( 
          <div className="cardA">
               <div className="card-action">
                    <h6 className="texte-action">{textaction}</h6> 
               </div>
               <div className="badge badge-outline ">HTML</div>
               <div className="badge badge-primary badge-outline">CSS</div>
               <div className="badge badge-secondary badge-outline">JS</div>         
          </div>   
     );
}
 
export default Actioncard;