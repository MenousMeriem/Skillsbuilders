import React from 'react'

function Carteprojet() {
  return (
    
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                
                <div className="card-body">
                    <h2 className="text-black text-center text-7xl p-9 ">Projets réalisés</h2>
                    <p className='text-black text-center text-3xl'> 
                        Bienvenue sur notre plateforme de cours en ligne ! <br /> 
                        Nous sommes ravis de vous offrir une opportunité unique <br />
                        d'apprendre depuis n'importe où et à n'importe quel moment.</p>
                    <div className="card-actions justify-center p-9">
                        <button className="btn bg-orange-600 border-transparent">Découvrire nos projets</button>
                    </div>
                </div>
                <figure className="">
                    <img className='w-11/12 h-11/12' src="./../assets/2.png"/>
                </figure>
            </div>
        </div>
  )
}

export default Carteprojet