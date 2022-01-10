import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom'
import './Carditem.css';


function CardItem(props) { 
  const [modelIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' onClick={() => setModalIsOpen(true)}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
      <Modal isOpen={modelIsOpen}
                onRequestClose={() => setModalIsOpen(false)}>
                  <Zoom>
                  <div className="modal">      
                          <div>
                     <button className="close"  onClick={() => setModalIsOpen(false)} >x</button>
                        </div>
                <div className='zoom'>  
                  <img alt='Travel Image'src={props.src}/>
                  
                 <div className='txt'>
                <p >
                  <h1><strong>{props.text}</strong></h1>
                  
                  <h2>{props.description}</h2>
                </p>
                
                
                </div>
                </div>
                  
                  </div>
                  </Zoom>
                </Modal>
    </>
  );
}

export default CardItem;
