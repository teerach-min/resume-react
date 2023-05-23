import React from 'react'

import './CardIcon.css'

interface CardDetail {
    image: string;
    text: string;
    experience: string;
}

const CardIcon = ({image, text, experience}: CardDetail) => {
    return (
        <div className="Card">
           <img src={image} alt={text} />
           <span>{text}</span>
           <p className={`text-xs ${experience?.toLowerCase()}`}>{experience}</p>
        </div>
    )
}

export default CardIcon