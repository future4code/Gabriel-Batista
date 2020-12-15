import React from 'react';
import './CardVerMais.css'

 function CardVerMais(props) {
    return (
        <div className="container">
            <img src={ props.imagemHabilidades } />
            <img src={ props.imagemContato } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.tell }</p>
                <p>{ props.email }</p>
                <p>{ props.endereço }</p>
                <p>{ props.habilidades }</p>
                <p>{ props.metas }</p>
            </div>
        </div>
    )
}


export default CardVerMais;
