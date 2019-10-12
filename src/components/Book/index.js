import React from 'react';
import './Book.css';
import {Link} from 'react-router-dom'
function Book(props){
    return(
        <div className="BookCard">
            <h3>{`#${props.number}`}</h3>
            <img src={props.image} alt={props.title}/>
            <h2>{props.title} </h2>
            <p>{`By ${props.author}`} </p>
            <div className="buttonContainer">
                <Link to={`/${props.slug}`}>Why this book?</Link>
                <a href={props.affiliateLink} target='/'> <button> See on Amazon</button> </a>
            </div>
            
        </div>
    )
}
export default Book;