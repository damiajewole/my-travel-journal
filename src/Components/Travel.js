import React from 'react';
import '../Travel.css';

export default function Joke (props){

    return (
        <div className = "section">
            <div className = "img--div">
                <img src = {`../img/${props.img}`} alt = {props.location} className = "travel--image" />
            </div>
            <div className = "travel--text">
                <span>
                    <img src = "./img/location.svg" alt = "map-icon" className = "icon"/>
                    <p>{props.country}</p>
                    <p className = "map--text"><a href = {`${props.mapLink}`}> View on Google Maps </a></p>
                </span>
                <h1 className = "header-bg-text">{props.location}</h1>
                <div className = "content--text">
                    <p className = "date--text"><b>{props.date}</b></p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}