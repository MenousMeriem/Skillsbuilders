import React from 'react'

function FormationCard({image, titre, content}) {
  return (
   <div className="card w-80 h-4/6 mb-10 glass">
    <figure><img src={image}/></figure>
        <div className="card-body bg-white">
            <h2 className="card-title">{titre}</h2>
            <p>{content}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary mx-auto mt-5"> Commencer la formation </button>
            </div>
        </div>
    </div>
  )
}

export default FormationCard