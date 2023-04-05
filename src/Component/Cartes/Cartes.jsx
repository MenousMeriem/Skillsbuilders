import './Cartes.css'          
import {BsFillArrowRightCircleFill} from 'react-icons/bs';

const Cartes = () => {
  return ( 
    <div className="Cartes__carte">
        
        <div className="flex justify-between w-screen px-16 items-center "> 
            <h1 className='text-6xl mb-10'> Nos <br /> formations</h1>
            <BsFillArrowRightCircleFill className='w-16 h-16'/>
        </div>
        <div className="container flex mx-auto xl:mx-auto justify-center">
            <div className="card__card cards__a">
                <div className="card__img">
                    <figure className="image">
                        <img src="./assets/html.png"/>
                    </figure>
                </div>
                <div className="card__body">
                    <h2> Formation complete en HTML  </h2>
                    <button className="btn btn-active btn-primary">Commencer la formation </button>
                </div>
                <div className="card-footer"></div>
            </div>

            <div className="card__card cards__b">
                <div className="card__img">
                    <figure className="image">
                        <img src="./assets/ng.png"/>
                    </figure>
                </div>
                <div className="card__body">
                    <h2> Formation complete en CSS  </h2>
                    <button className="btn btn-active btn-primary">Commencer la formation </button>
                </div>
                <div className="card-footer"></div>
            </div>

            <div className="card__card cards__c">
                <div className="card__img">
                    <figure className="image">
                        <img src="./assets/js.png"/>
                    </figure>
                </div>
                <div className="card__body">
                    <h2> Formation complete en JS  </h2>
                    <button className="btn btn-active btn-primary">Commencer la formation </button>
                </div>
            </div>
        </div>
    </div> 
   );
}
 
export default Cartes ;
          
          