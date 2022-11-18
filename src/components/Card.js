import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className = 'dark-pink dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='cat' src={`https://robohash.org/${id}?set=set4`}/>
            <div>
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
            </div>
        </div>
    )
}

export default Card;