import React from 'react';

const Pet = ({ pet, color }) => {
  const petImage = pet.image ? <img src={`../assets/images/${pet.image}`}/> : null;
  return(
    <div className={`pet ${color}`}>
      <div className="photo">{petImage}</div>
      <div className="text">
        <span className="seed">{pet.seed}</span>
        <span className="pet-name">{pet.name}</span>
      </div>
    </div>
  )
}

export default Pet;