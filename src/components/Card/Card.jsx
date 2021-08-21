import React from 'react'
import imgHouse from "../../images/asd.jpg"
import "./Card.css"

const Card = () => {
  return (
    <div className="main-container">

      <div className="card">
        <img className="img" src={imgHouse} alt="Imagen de una casa" />
        <p className="card-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos deleniti modi quia praesentium iariatur reiciendis ducimus ut aut inventore!
        </p>
      </div>

    </div>

  )
}

export default Card