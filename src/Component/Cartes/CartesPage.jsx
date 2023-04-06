import React from 'react'
import FormationCard from '../FormationCard/FormationCard';
import image__one from "../../assets/html.png";
import image__two from "../../assets/css.png";
import image__three from "../../assets/js.png";



const CartesPage = ()=> {
  return (

        <div className="Cartes__carte mt-16">
            <div className="flex justify-around">            
                <FormationCard image={image__one} titre="Formation en HTML" content="Formation complete en HTML. "/>
                <FormationCard image={image__one} titre="Formation en CSS" content="Formation complete en CSS."/>
                <FormationCard image={image__three} titre="Formation en JavaScript" content="Formation complete en JS."/>
            </div>
        </div> 

  );
}

export default CartesPage




   


          
          