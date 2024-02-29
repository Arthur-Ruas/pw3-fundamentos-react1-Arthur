import React from 'react';
import './cardBook.css';

const CardBook = ({dataJSON}) => {
  return(
    <>
      {
        dataJSON.map((book) => {
          return(
            <div className="card-book">
              <div className='card-book__top'>
                  <img className="card-book__image" src={book.imagem} alt="Capa do livro de Isaac Asimov"/>
              </div>
              <div className='card-book__botttom'>
                  <div className='card-book__info'>
                      <h3 className="card-book__title">{book.titulo}</h3>
                      <p className="card-book__author">por <span>{book.autor}</span></p>
                  </div>
                  <p className="card-book__description">{book.descricao}</p>
              </div>     
            </div>
          )
        })
      }
    </>
  )
}

export default CardBook;