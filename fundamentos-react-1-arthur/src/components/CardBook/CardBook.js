import React from 'react'
import './cardBook.css'

const CardBook = ({title, author, image, description}) => {
  return (
    <div className="card-book">
        <div className='card-book__esquerdo'>
            <img className="card-book__image" src={image} alt="Capa do livro de Isaac Asimov"/>
        </div>
        <div className='card-book__direito'>
            <header className='card-book__direito__header'>
                <h3 className="card-book__title">{title}</h3>
                <p className="card-book__author">por <span>{author}</span></p>
            </header>
            <p className="card-book__description">{description}</p>
        </div>     
    </div>
  )
}

export default CardBook