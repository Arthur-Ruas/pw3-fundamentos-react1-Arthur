import React from 'react'
import './cardBook.css'

const CardBook = ({title, author, image, description}) => {
  return (
    <div className="card-book">
        <h3 className="card-book__title">{title}</h3>
        <p className="card-book__author">{author}</p>

        <img className="card-book__image" src={image} alt="Capa do livro as caverbas de aço de Isaac Asimov"/>

        <p className="card-book__description">{description}</p>
    </div>
  )
}

export default CardBook