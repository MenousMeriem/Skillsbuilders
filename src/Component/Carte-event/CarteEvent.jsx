import React from 'react'

function CarteEvent() {
  return (
        <div className=' bg-titre w-screen h-[80vh] flex flex-col gap-8 p-16 rounded-2xl	' >
          <h2 className="text-white text-8xl text-center mb-8"> Evenements </h2>
          <h3 className='text-white text-4xl text-center'> Bienvenue sur notre plateforme de cours en ligne! Nous sommes </h3>
          <h3 className='text-white text-4xl text-center'> ravis de vous offrir une opportunité unique d'apprendre depuis </h3>
          <h3 className='text-white text-4xl text-center'> n'importe où et à n'importe quel moment. </h3> 
          <div className=" mt-10 mx-auto">
            <button className="btn btn-primary bg-white text-blue-900 mr-4 hover:text-white"> Notre calendrier </button>
            <button className="btn btn-primary  bg-white text-blue-900 mr-4 hover:text-white" > Découvrir nos evènements </button>
          </div>
        </div>
  )
}

export default CarteEvent