import React from 'react'
import { Link } from 'react-router-dom'
import Calendrier from '../../Pages/Calendrier.jsx'
import Evenements from '../../Pages/Evenements'



function CarteEvent() {
  return (
        <div className=' bg-titre h-[80vh] flex flex-col gap-8 p-16 rounded-2xl mb-10 	' >
          <h2 className="text-white text-8xl text-center mb-8"> Evenements </h2>
          <h3 className='text-white text-4xl text-center'> Bienvenue sur notre plateforme de cours en ligne! Nous sommes </h3>
          <h3 className='text-white text-4xl text-center'> ravis de vous offrir une opportunité unique d'apprendre depuis </h3>
          <h3 className='text-white text-4xl text-center'> n'importe où et à n'importe quel moment. </h3> 
          <div className=" mt-10 mx-auto">
            <Link to={'/Calendrier'}> 
              <button className="btn btn-primary bg-white text-blue-900 mr-4 hover:text-white"> Notre calendrier </button>
            </Link>
            <Link to={'/Evenements'}>
              <button className="btn btn-primary  bg-white text-blue-900 mr-4 hover:text-white" > Découvrir nos evènements </button>
            </Link>
          </div>
        </div>
  )
}

export default CarteEvent